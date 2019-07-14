import React from "react"


const HeaderClone =({title})=>{

  return(
    <nav class="nav">
    <div class="container">
      <div class="nav__logo">
        <a class="logo" href="http://innos.com.vn/" style="background-image: url(&quot;img/Logo-trang.png&quot;);"></a> </div>
      <div class="nav__wrapper">

        <ul class="nav__list">
          
          <li id="solution_panel" class="menu-item has-dropdown">
            <a href="http://innos.com.vn/solutions.html" onmouseover="onHover('solution_panel')">Solutions</a>
            <div class="sub-menu-wrapper" onmouseover="onHover('solution_panel')" onmouseout="onBlur('solution_panel')">
              <div class="sub-menu-container">
                <div class="article-container">
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/slideMain4.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Internet Of Thing</h3>
                          <p class="article__description">Innos team provides comprehensive IoT software development expertise to help you build a full-scale ecosystem around your Internet of Things solution.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/slideMain3.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Blockchain Technologies</h3>
                          <p class="article__description">Introduce the highest level of security and automate your operations with our blockchain solutions.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sub-menu-list-container">
                  <ul id="solution_panel_sub" class="sub-menu">
                    <li class="menu-item">
                      <a href="#">
                                      Internet of Things<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Blockchain Technologies<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Cloud Computing<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Artificial Intelligence<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li id="services_panel" class="menu-item has-dropdown">
            <a href="http://innos.com.vn/services.html" onmouseover="onHover('services_panel')">Services</a>
            <div class="sub-menu-wrapper" onmouseover="onHover('services_panel')" onmouseout="onBlur('services_panel')">
              <div class="sub-menu-container">
                <div class="article-container">
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/handshake.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Product Engineering</h3>
                          <p class="article__description">Enterprise software development with all-embracing 10-year expertise and the latest tech.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/mockup3.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Mobile App Development</h3>
                          <p class="article__description">Building solid apps faster by using a mobile platform and custom development at once.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sub-menu-list-container">
                  <ul id="services_panel_sub" class="sub-menu">
                    <li class="menu-item">
                      <a href="#">
                                      Mobile Applications Development<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Web Applications Development<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Product Engineering<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      IT consulting<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li id="industries_panel" class="menu-item has-dropdown">
            <a href="http://innos.com.vn/industries.html" onmouseover="onHover('industries_panel')">Industries</a>
            <div class="sub-menu-wrapper" onmouseover="onHover('industries_panel')" onmouseout="onBlur('industries_panel')">
              <div class="sub-menu-container">
                <div class="article-container">
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/construction.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Construction</h3>
                          <p class="article__description">Comprehensive digital transformation for the construction industry with AR, mobile, and scalable enterprise software.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/healthcare.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Healthcare</h3>
                          <p class="article__description">Practical cross-platform software that aids all the sides of the healthcare process.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sub-menu-list-container">
                  <ul id="industries_panel_sub" class="sub-menu">
                    <li class="menu-item">
                      <a href="#">
                                      Construction<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Healthcare<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Logistics<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Retail &amp; Ecommerce<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li id="resources_panel" class="menu-item has-dropdown">
            <a href="http://innos.com.vn/resources.html" onmouseover="onHover('resources_panel')">Resources</a>
            <div class="sub-menu-wrapper" onmouseover="onHover('resources_panel')" onmouseout="onBlur('resources_panel')">
              <div class="sub-menu-container">
                <div class="article-container">
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/insight.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Insights</h3>
                          <p class="article__description">We've provided tailored learning and development solutions that help businesses get the very best from their people at work.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/news.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">News</h3>
                          <p class="article__description">The most important technology news, developments and trends with insightful analysis and commentary. </p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sub-menu-list-container">
                  <ul id="resources_panel_sub" class="sub-menu">
                    <li class="menu-item">
                      <a href="#">
                                      Blog<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      News<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Insights<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li id="clients_panel" class="menu-item has-dropdown">
            <a href="http://innos.com.vn/clients.html" onmouseover="onHover('clients_panel')">Clients</a>
            <div class="sub-menu-wrapper" onmouseover="onHover('clients_panel')" onmouseout="onBlur('clients_panel')">
              <div class="sub-menu-container">
                <div class="article-container">
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/clientM.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Clients</h3>
                          <p class="article__description">Innos a Vietnam-based smart home startup, envisioned an intelligent system... </p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/CaseStudies.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Case Studies</h3>
                          <p class="article__description">A publishing platform helps establish a consistent brand voice online ...</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sub-menu-list-container">
                  <ul id="clients_panel_sub" class="sub-menu">
                    <li class="menu-item">
                      <a href="#">
                                      Clients<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Case Studies<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li id="company_panel" class="menu-item has-dropdown">
            <a href="http://innos.com.vn/company.html" onmouseover="onHover('company_panel')">Company</a>
            <div class="sub-menu-wrapper" onmouseover="onHover('company_panel')" onmouseout="onBlur('company_panel')">
              <div class="sub-menu-container">
                <div class="article-container">
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/aboutUs.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">About Us</h3>
                          <p class="article__description">Learn more about intellectsoft in numbers, products, and awards.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="article__item-wrapper">
                    <div class="article__item">
                      <div class="article__content">
                        <div class="article__media">
                          <div class="article__media-inner" style="background-image:url(image/careers.png);"></div>
                        </div>
                        <div class="article__text">
                          <h3 class="article__title">Careers</h3>
                          <p class="article__description">See the latest available career opportunities in our offices around the world.</p>
                          <a href="#" class="article__link--more">
                                              read more<i class="fas fa-angle-right"></i>
                                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sub-menu-list-container">
                  <ul id="company_panel_sub" class="sub-menu active">
                    <li class="menu-item">
                      <a href="#">
                                      About Us<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Partners<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Team<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Careers<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                    <li class="menu-item">
                      <a href="#">
                                      Contact<i class="fas fa-angle-right"></i>
                                  </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
      <div class="nav__btn">
        <a class="get-touch btn" href="#">Get in touch</a> <a id="c-button--push-left" href="#" class="sandwich menu-btn">
          <i class="fas fa-bars" style="color: #0A839F"></i>
        </a>
      </div>
    </div>
  </nav>
  )
}


export default HeaderClone