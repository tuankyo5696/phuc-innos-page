"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.publicLoader = exports.setLoader = exports.ProdLoader = exports.BaseLoader = void 0;

require("core-js/modules/es7.promise.finally");

var _prefetch = _interopRequireDefault(require("./prefetch"));

var _emitter = _interopRequireDefault(require("./emitter"));

var _findPath = _interopRequireDefault(require("./find-path"));

const preferDefault = m => m && m.default || m;

const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};

const createPageDataUrl = path => {
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${__PATH_PREFIX__}/page-data/${fixedPath}/page-data.json`;
};

const doFetch = (url, method = `GET`) => new Promise((resolve, reject) => {
  const req = new XMLHttpRequest();
  req.open(method, url, true);
  req.withCredentials = true;

  req.onreadystatechange = () => {
    if (req.readyState == 4) {
      resolve(req);
    }
  };

  req.send(null);
});

const loadPageDataJson = loadObj => {
  const {
    pagePath,
    retries = 0
  } = loadObj;
  const url = createPageDataUrl(pagePath);
  return doFetch(url).then(req => {
    const {
      status,
      responseText
    } = req;
    const contentType = req.getResponseHeader(`content-type`);
    const isJson = contentType && contentType.startsWith(`application/json`); // Handle 200 JSON (Success)

    if (status === 200 && isJson) {
      return Object.assign(loadObj, {
        status: `success`,
        payload: JSON.parse(responseText)
      });
    } // Handle 404


    if (status === 404 || status === 200 && !isJson) {
      // If the request was for a 404 page and it doesn't exist, we're done
      if (pagePath === `/404.html`) {
        return Object.assign(loadObj, {
          status: `failure`
        });
      } // Need some code here to cache the 404 request. In case
      // multiple loadPageDataJsons result in 404s


      return loadPageDataJson(Object.assign(loadObj, {
        pagePath: `/404.html`,
        notFound: true
      }));
    } // handle 500 response (Unrecoverable)


    if (status === 500) {
      return Object.assign(loadObj, {
        status: `error`
      });
    } // Handle everything else, including status === 0, and 503s. Should retry


    if (retries < 3) {
      return loadPageDataJson(Object.assign(loadObj, {
        retries: retries + 1
      }));
    } // Retried 3 times already, result is a failure.


    return Object.assign(loadObj, {
      status: `error`
    });
  });
};

const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
};

const toPageResources = (pageData, component = null) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath
  };
  return {
    component,
    json: pageData.result,
    page
  };
};

class BaseLoader {
  constructor(loadComponent, matchPaths) {
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: `success` || `error`,
    //   payload: PageResources, // undefined if `error`
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //   }
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.pageDataDb = new Map();
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    this.pathFinder = new _findPath.default(matchPaths);
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }

  loadPageDataJson(rawPath) {
    const pagePath = this.pathFinder.find(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      return Promise.resolve(this.pageDataDb.get(pagePath));
    }

    return loadPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  } // TODO check all uses of this and whether they use undefined for page resources not exist


  loadPage(rawPath) {
    const pagePath = this.pathFinder.find(rawPath);

    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);
      return Promise.resolve(page.payload);
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    const inFlight = this.loadPageDataJson(pagePath).then(result => {
      if (result.status === `error`) {
        return {
          status: `error`
        };
      }

      if (result.status === `failure`) {
        // throw an error so error trackers can pick this up
        throw new Error(`404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/`);
      }

      const pageData = result.payload;
      const {
        componentChunkName
      } = pageData;
      return this.loadComponent(componentChunkName).then(component => {
        const finalResult = {
          createdAt: new Date()
        };
        let pageResources;

        if (!component) {
          finalResult.status = `error`;
        } else {
          finalResult.status = `success`;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageResources = toPageResources(pageData, component);
          finalResult.payload = pageResources;

          _emitter.default.emit(`onPostLoadPageResources`, {
            page: pageResources,
            pageResources
          });
        }

        this.pageDb.set(pagePath, finalResult); // undefined if final result is an error

        return pageResources;
      });
    }).finally(() => {
      this.inFlightDb.delete(pagePath);
    });
    this.inFlightDb.set(pagePath, inFlight);
    return inFlight;
  } // returns undefined if loading page ran into errors


  loadPageSync(rawPath) {
    const pagePath = this.pathFinder.find(rawPath);

    if (this.pageDb.has(pagePath)) {
      return this.pageDb.get(pagePath).payload;
    }

    return undefined;
  }

  shouldPrefetch(pagePath) {
    // If a plugin has disabled core prefetching, stop now.
    if (this.prefetchDisabled) {
      return false;
    } // Skip prefetching if we know user is on slow or constrained connection


    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return false;
    } // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.


    if (!this.prefetchTriggered.has(pagePath)) {
      this.apiRunner(`onPrefetchPathname`, {
        pathname: pagePath
      });
      this.prefetchTriggered.add(pagePath);
    }

    this.doPrefetch(pagePath).then(pageData => {
      const realPath = this.pathFinder.find(pagePath);

      if (!this.prefetchCompleted.has(realPath)) {
        this.apiRunner(`onPostPrefetchPathname`, {
          pathname: pagePath
        });
        const realPath = this.pathFinder.find(pagePath);
        this.prefetchCompleted.add(realPath);
      }
    });
    return true;
  }

  doPrefetch(pagePath) {
    throw new Error(`doPrefetch not implemented`);
  }

  hovering(rawPath) {
    this.loadPage(rawPath);
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = this.pathFinder.find(rawPath);
    const page = this.pageDataDb.get(pagePath);

    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }

  isPageNotFound(rawPath) {
    const pagePath = this.pathFinder.find(rawPath);
    const page = this.pageDb.get(pagePath);
    return page && page.notFound === true;
  }

}

exports.BaseLoader = BaseLoader;

const createComponentUrls = componentChunkName => window.___chunkMapping[componentChunkName].map(chunk => __PATH_PREFIX__ + chunk);

class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths) {
    const loadComponent = chunkName => asyncRequires.components[chunkName]().then(preferDefault);

    super(loadComponent, matchPaths);
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    return (0, _prefetch.default)(pageDataUrl).then(() => // This was just prefetched, so will return a response from
    // the cache instead of making another request to the server
    this.loadPageDataJson(pagePath)).then(result => {
      if (result.status !== `success`) {
        return Promise.resolve();
      }

      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch.default)).then(() => pageData);
    });
  }

}

exports.ProdLoader = ProdLoader;
let instance;

const setLoader = _loader => {
  instance = _loader;
};

exports.setLoader = setLoader;
const publicLoader = {
  // Deprecated methods. As far as we're aware, these are only used by
  // core gatsby and the offline plugin, however there's a very small
  // chance they're called by others.
  getResourcesForPathname: rawPath => {
    console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);
    return instance.i.loadPage(rawPath);
  },
  getResourcesForPathnameSync: rawPath => {
    console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);
    return instance.i.loadPageSync(rawPath);
  },
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  loadPageSync: rawPath => instance.loadPageSync(rawPath),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath)
};
exports.publicLoader = publicLoader;
var _default = publicLoader;
exports.default = _default;