import React from "react"

import "./news.scss"


const News = (props) => {
	 
		let attachClasses = ["blog", ""]
		if (props.scroll) {
				attachClasses = ["blog", "in-view"]
		}

    return (
        <section className={attachClasses.join(" ")}>
            <div className="container">
                <h2 className="title title--black">LATEST NEWS AND INSIGHTS</h2>
                <div id="insightsPosts"></div>
                <div className="blog__grid js-show">

                    <div className="featured-post__wrapper">
                        <div className="blog__item">
                            <div className="blog__content firstElm">
                                <div className="blog__media">
                                    <div className="blog__media-inner news1" href="#"></div>
                                </div>
                                <div className="blog__text"><span className="blog__tag">AR</span>
																<a href="#/">
                                    <h3 className="blog__title">AR Apps, Eyepieces &amp; Mirrors: How Augmented Reality Changes the World</h3>
																</a>
                                    <p className="blog__description">5 exciting examples from retail, marketing, and the military.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

				<div className="posts__wrapper">
					<div className="blog__item">
						<div className="blog__content">
							<div className="blog__media">
								<div className="blog__media-inner news2" href="#" ></div>
							</div>
							<div className="blog__text"><span className="blog__tag">Business</span>
                            <a href="#/">
                                <h3 className="blog__title">Apps Inspired by Uber: Android App Development Examples &amp; Tips</h3>
                            </a>
								<p className="blog__description">Five apps inspired by Uber, plus several development tips.
								</p>
							</div>
						</div>
					</div>
					<div className="blog__item">
						<div className="blog__content">
							<div className="blog__media">
								<div className="blog__media-inner news3" href="#/"></div>
							</div>
							<div className="blog__text"><span className="blog__tag">Business</span>
							<a href="#/"><h3 className="blog__title">Biggest Flops &amp; Disappointments in Enterprise Application Development</h3></a>
								<p className="blog__description">Avoid the mistakes from our selection at all costs.
								</p>
							</div>
						</div>
					</div>
				</div>
                
			</div>
		</div>
	</section>

    )
}

export default News
