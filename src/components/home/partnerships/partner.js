import React from "react"
import "./partner.scss"

const Partner =(props)=>{
  let attachClasses = ["animate default right", ""]
  if (props.scroll) {
      attachClasses = ["animate default right", "in-view"]
  }

  return(
    <div>
        <div className="partnerships2 container">
          <div className="ttaPadding">
            <div className={attachClasses.join(" ")}>
              <h2>Our <strong>partnerships</strong></h2>
              <p>We cultivate and celebrate relationships that are meaningful 
                  rather than simply transactional. So whether your event is in Preston, 
                  Paris or Pretoria, our specialist, long-term partnerships with outstanding 
                  international suppliers enable us to secure the best value for you, 
                  with full confidence in quality and flawless execution.   
                  <br/>
              </p>
            </div>
          </div>
          <div className="divPartner">

          </div>
        </div>


    </div>
  )
}


export default Partner