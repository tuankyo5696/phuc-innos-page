import React from "react";
//import { Link } from "gatsby"
import "./about.scss"

import {ChevronRight} from 'react-feather'
//import { redirectTo } from "@reach/router";

//import Slider from "react-slick";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import logo1 from './../../../assets/img/media/stakeholders/logo1.png'
import logo2 from './../../../assets/img/media/stakeholders/logo2.png'
import logo3 from './../../../assets/img/media/stakeholders/logo3.png'
import logo4 from './../../../assets/img/media/stakeholders/logo4.png'
import logo5 from './../../../assets/img/media/stakeholders/logo5.png'
import logo6 from './../../../assets/img/media/stakeholders/logo6.png'
import logo7 from './../../../assets/img/media/stakeholders/logo7.png'
import logo8 from './../../../assets/img/media/stakeholders/logo8.png'
import logo9 from './../../../assets/img/media/stakeholders/logo9.png'
import logo10 from './../../../assets/img/media/stakeholders/logo10.png'
import logo11 from './../../../assets/img/media/stakeholders/logo11.png'
import logo12 from './../../../assets/img/media/stakeholders/logo12.png'




const About =(props)=>  {
  
    const opptions={
        infinite:true,
        autoPlay: true,
        duration:2000,
        buttonsDisabled:true,
        dotsDisabled:true,
        responsive:{
            0: {
                items: 3
            },
            1024: {
                items: 8
            }   // number of elements in the slide
        },
        stagePadding:{
            paddingLeft: 0,     // in pixels
            paddingRight: 0
        },
        mouseDragEnabled:true,
        fadeOutAnimation:true,
    }

 
    let attachClasses = ["cemetery__title", ""];
    if (props.scroll) {
        attachClasses = ["cemetery__title", "in-view"]
    }

    //const handleOnDragStart = e => e.preventDefault()
    return (
        <div className="container">
            <div className={attachClasses.join(" ")} style={{paddingBottom:'2rem'}}>
                <br/><br/><br/>
                <h2>About Us</h2>
                <p>
                    Found in 2010 as a team of cross-industries experts, 
                    system integrators and application developers, Innos is now a 
                    cross-department team of mobile, web, data and embedded system specialists 
                    with 8-years experience on the business software development market, 
                    a reliable information technology partner for Vietnam SME and MNC brands. 
                    In beginning of 2018, Innos has been empowered with strong financial support to 
                    invest in R&amp;D as it acquired by Acexis JSC.  We know what defines impactful, 
                    wide-ranging solutions powered by the latest technologies across all industries. 
                    With passion and exhaustive real-life cross-functional skills and the ability 
                    of our software engineers, we bring your ideas to life, and create stunning 
                    innovated applications for your business.
                </p>
            </div>
            <div style={{backgroundColor:'#f1f1f1'}}>
                <AliceCarousel AutoPlaymode {...opptions} >
                    <img src={logo1} alt="img"/>
                    <img src={logo2} alt="img"/>
                    <img src={logo3} alt="img"/>
                    <img src={logo4} alt="img"/>
                    <img src={logo5} alt="img"/>
                    <img src={logo6} alt="img"/>
                    <img src={logo7} alt="img"/>
                    <img src={logo8} alt="img"/>
                    <img src={logo9} alt="img"/>
                    <img src={logo10} alt="img"/>
                    <img src={logo11} alt="img"/>
                    <img src={logo12} alt="img"/>
                </AliceCarousel>
            </div>
            
            <div className="talk column column--flex-center">
                <a href="#/" className="button button--clear button--blue">Talk to our team
                </a>
                <ChevronRight href="#/" color="#0A839F"/>
            </div>
      </div>
    );
  
}


export default About





