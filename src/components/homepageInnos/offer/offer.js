import React, { Component } from "react"

import "./offer.scss"
import { DATASOLUTIONS, DATAINDUSTRIES, DATASERVICES } from './../../../data/staticData';
import SolutionItem from './offerItem/solutionItem';
import ServicesItem from './offerItem/servicesItem';
import IndustriesItem from './offerItem/industriesItem';

class Offer extends Component { 
		state = {
            activeSolution: true,
            activeServices: false,
            activeIndustries: false,
			toggleClass:''
		};

    activeSolutionOffer = () =>{
        this.setState({
            activeSolution: true,
            activeServices: false,
            activeIndustries: false
        })
    }
    activeServicesOffer = () => {
        this.setState({
            activeSolution: false,
            activeServices: true,
            activeIndustries: false
        })
    }
    activeIndustriesOffer = () => {
        this.setState({
            activeSolution: false,
            activeServices: false,
            activeIndustries: true
        })
    }
	render(){
		const dataSolutions= DATASOLUTIONS
		const dataServices = DATASERVICES
        const dataIndustries = DATAINDUSTRIES
        
		const { toggleClass } = this.state
		return(
			<section className="section-offers">

				<div id="particles" style={{width: '100%', height: '821px'}} data-1500="background-position:0px 0px;" data-2300="background-position:0px 360px;">
					<canvas id="canvas" width="1905" height="821" style={{width: '100%', height: '100%'}}></canvas>
				</div>

        <div className="container">
          <div style={{padding: '0px 0 120px !important'}} className="offers">
            <div className="offers-title">
              <h2 className="title title--black"> What We Offer </h2>
            </div>

            <div className="offers-tab" style={{margin: '60px auto'}}>
              <h4 id="solutions-title" className= {`offers-tablinks ${toggleClass}`} data-name="solutions" onClick = {this.activeSolutionOffer}>
                Solutions
              </h4>
              <h4 id="services-title" className= {`offers-tablinks ${toggleClass}`} data-name="services" onClick = {this.activeServicesOffer}>
                Services
              </h4>
              <h4 id="industries-title" className= {`offers-tablinks ${toggleClass}`} data-name="industries" onClick = {this.activeIndustriesOffer}>
                Industries
              </h4>
            </div>

         <SolutionItem dataSolutions ={dataSolutions} activeSolution = {this.state.activeSolution} />
         <ServicesItem dataServices={dataServices} activeServices={this.state.activeServices}/>
         <IndustriesItem dataIndustries={dataIndustries} activeIndustries={this.state.activeIndustries}/>

          </div>
        </div>
		</section>

		)
	}
}

export default Offer;
