import React from "react"
import "./approach.scss"

const Approach =(props)=>{
  let attachClasses = ["ttaPadding animate", ""]
  if (props.scroll) {
      attachClasses = ["ttaPadding animate", "in-view"]
  }


  return(
        <div className="approach" style={{minHeight: "262.8px"}}>
				<div className="align-middle">
					<div className={attachClasses.join(" ")}>
						<div>
							<h2>Our <strong>approach</strong></h2>
							<p>
                  If you have a clear idea of what you want, we’ll bring your concept to life. 
                  If not, we’ll relish the opportunity to translate your desired business outcomes
                    into a joined-up strategy, since the up-front thinking is
                    as crucial as the downstream execution. 
                      <br/>
                      <br/>
                      We dare to look beyond the obvious – after all, 
                      our brief is not to organise an event but to unite the entire audience in your vision. 
                  <br/>
              </p>
						</div>
					</div>
				</div>
			</div>
  )
}


export default Approach