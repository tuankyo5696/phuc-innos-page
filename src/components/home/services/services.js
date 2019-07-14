import React from "react"
import "./services.scss"

const Services =(props)=>{
    let attachClasses = ["animate default divServices", ""]
    if (props.scroll) {
        attachClasses = ["animate default divServices", "in-view"]
    }


  return(
    <div>
        <div className="services" >
          <div className="ttaPadding">
            <div className={attachClasses.join(" ")}>
              <h2>Our <strong>expertise</strong></h2>
              <p>
                  We simplify the client experience from concept to conclusion,
                    as your single source of consultancy and project management,
                    content development, technical production, logistics, digital and creative, 
                    and evaluation services. 
                  <br/>
                  <br/>
                  You can expect an exceptional event that provides a solid 
                  return on your objectives and leaves participants buzzing.
                  <br/>
              </p>
            </div>
				</div>
			</div>
    </div>
  )
}


export default Services