import React from "react"

import petronas from "./../../../assets/images/landmarks/petronas-towers.png"
import pagoda from "./../../../assets/images/landmarks/pagoda.png"
import taj from "./../../../assets/images/landmarks/taj-mahal.png"
import sydney from "./../../../assets/images/landmarks/sydney-opera-house.png"
import liberty from "./../../../assets/images/landmarks/statue-of-liberty.png"
import redeemer from "./../../../assets/images/landmarks/christ-the-redeemer.png"
import ben from "./../../../assets/images/landmarks/big-ben.png"
import eiffel from "./../../../assets/images/landmarks/eiffel-tower.png"

import ground from "./../../../assets/images/landmarks/ground.png"


import "./difference.scss"

const Difference =(props)=>{
	let attachClasses = ["animate default left", ""]
	let attachClasses2 = ["skyline align-bottom animate",""]
    if (props.scroll) {
		attachClasses = ["animate default left", "in-view"]
		}
		if(props.scroll2){
			attachClasses2= ["skyline align-bottom animate","in-view"]
		}


  return(
    <div>
        <div className="difference">
				<div className="col-sm-12 col-md-6 ttaPadding">
					<div className={attachClasses.join(" ")}>
						<h2>Our <strong>difference</strong></h2>
						<p>It’s our job to anticipate every need, plan for every eventuality, 
								and adapt to the unforeseeable. 
								We’re always mindful of the bigger picture while attentive to the smallest details. 
								<br/>
								<br/>
								Our size, talent and personal touch make us responsive and versatile. 
								Who you see is who you get, and we’re as invested in your results as you are. 
								<br/>
						</p>
					</div>
				</div>
				<div className={attachClasses2.join(" ")}>
					<img alt="layer" id="layer8" className="layer" data-movement="0" src={petronas} style={{marginLeft: "0%"}} />
					<img alt="layer" id="layer7" className="layer" data-movement="1" src={eiffel} style={{marginLeft: "0.376273%"}} />
					<img alt="layer" id="layer6" className="layer" data-movement="2" src={pagoda} style={{marginLeft: "0.752546%"}}/>
					<img alt="layer" id="layer5" className="layer" data-movement="3" src={taj} style={{marginLeft: "1.12882%"}} />
					<img alt="layer" id="layer4" className="layer" data-movement="3" src={sydney} style={{marginLeft: "1.12882%"}}/>
					<img alt="layer" id="layer3" className="layer" data-movement="7" src={liberty} style={{marginLeft: "2.63391%"}} />
					<img alt="layer" id="layer2" className="layer" data-movement="5" src={redeemer}  style={{marginLeft: "1.88136%"}}/>
					<img alt="layer" id="layer1" className="layer" data-movement="10" src={ben} style={{marginLeft: "3.76273%"}}/>
					<img alt="img" id="layer9" src={ground}/>
				</div>


			</div>
    </div>
  )
}


export default Difference