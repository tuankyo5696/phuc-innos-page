import React from "react"

import "./offices.scss"


const Offices = (props) => {

    let attachClasses = ["offices", ""];
    if (props.scroll) {
      console.log('aaaa')
        attachClasses = ["offices", "in-view"]
    }

    return (
      <section className={attachClasses.join(" ")} 
      style={{paddingTop:'5rem'}}>
        <div className="container">
          <div className="offices__title">
            <h2>Our Offices</h2> <br/>
            <p>Innos operates in multiple offices and development center across Vietnam. 
              Reach out to us for software development and services in your region.</p>
          </div>
          <div id="officesSlider" className="offices-slider owl-carousel owl-loaded owl-drag">
          
            <div className="owl-stage-outer">
              <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)',
                transition: 'all 0s ease 0s'}}>
                <div className="owl-item active">
                  <div className="offices-slider__item pic1">
                      <div className="offices-slider__content">
                        <div className="offices-slider__overlay"></div>
                          <div className="offices-slider__text">
                            <div className="offices-slider__city">VIET NAM<br/>HO CHI MINH</div>
                              <div className="offices-slider__address">
                                <p>573/12 SU VAN HANH, WARD 13, DISTRICT 10</p>
                                <p>+84 28 3863 3636</p>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>


              <div className="owl-item active">
                <div className="offices-slider__item pic2">
                    <div className="offices-slider__content">
                      <div className="offices-slider__overlay"></div>
                        <div className="offices-slider__text">
                          <div className="offices-slider__city">VIET NAM<br/>NHA TRANG</div>
                            <div className="offices-slider__address">
                              <p>154 BA LANG, NHA TRANG CITY, KHANH HOA PROVICE</p>
                              <p>+84 901 919 757</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>

    )
}

export default Offices
