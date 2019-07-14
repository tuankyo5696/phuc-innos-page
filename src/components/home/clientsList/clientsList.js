import React, { Component } from "react";
//import Slider from "react-slick";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./clientsList.scss"
import logo from './../../../assets/images/logo-gsk.png'

export default class AutoPlay extends Component {
  render() {
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
        }
        
    }

    const handleOnDragStart = e => e.preventDefault()
    return (
      <div className="clientList" >
          <AliceCarousel AutoPlaymode {...opptions}>

                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>
                <img src={logo} onDragStart={handleOnDragStart} alt="img"/>

            </AliceCarousel>
      </div>
    );
  }
}
