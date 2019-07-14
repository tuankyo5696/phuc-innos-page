import React, { Component } from "react";
import {ChevronRight} from 'react-feather'
import { Fade } from 'react-slideshow-image';
import "./homepageTitle.scss"


export default class HomePageTitle extends Component {
  render() {
       
    const content=[
        {   
            id:0,
            text1:'Enterprise Software Development', 
            text2:'Leverage our eight-year expertise to create a solid software foundation for your business.'
        },
        {   
            id:1,
            text1:'Mobile App Development', 
            text2:'We design and develop the android and iPhone application for your IoT, '+
            'product with rich feature UI that could empower enterprises with next ' +
            'generation technology by our iot mobile app development services.'
        },
        {   
            id:2,
            text1:'Blockchain Technologies', 
            text2:'Introduce the highest level of security and automate your operations with our blockchain solutions.'
        },
        {   
            id:3,
            text1:'CUSTOM IoT DEVELOPMENT SERVICES', 
            text2:'Build secure enterprise Internet of Things (IoT) solutions that will help your business gather Big Data, '+
            'optimise operations, and unlock a new level of efficiency.'
        },
        {   
            id:4,
            text1:'Cloud Computing', 
            text2:'Use cloud computing solutions to create a scalable, flexible, and connected enterprise environment.'
        },
        {   
            id:5,
            text1:'Artificial Intelligence', 
            text2:'The central goal of AI is to provide a set of algorithms and '+ 
            'techniques that can be used to solve problems that humans' + 
            'perform intuitively and near automatically, but are otherwise very challenging for computers.'
        },

    ]

      const properties = {
        duration: 10000,
        transitionDuration: 300,
        infinite: true,
        indicators: true,
        arrows: false,
      }
    
    return (
        <section className="homeTitle" style={{position: 'relative', paddingTop:'3rem'}}>
            <Fade {...properties}>
                <div className="each-fade">
                    <div className="imgHome home1">
                        <div>
                            <h2>{content[0].text1}</h2>
                            <p>{content[0].text2}</p>
                            <a href="#/">
                                Read more
                                <ChevronRight href="#/" color="white" size='20'/>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="each-fade">
                    <div className="imgHome home2">
                        <div>
                            <h2>{content[1].text1}</h2>
                            <p>{content[1].text2}</p>
                            <a href="#/">
                                Read more
                                <ChevronRight href="#/" color="white" size='20'/>
                            </a>
                        </div>
                       
                    </div>
                </div> 
                <div className="each-fade">
                    <div className="imgHome home3">
                        <div>
                            <h2>{content[2].text1}</h2>
                            <p>{content[2].text2}</p>
                            <a href="#/">
                                Read more
                                <ChevronRight href="#/" color="white" size='20'/>
                            </a>
                        </div>
                        
                
                    </div>
                </div> 
                <div className="each-fade">
                    <div className="imgHome home4">
                        <div>
                            <h2>{content[3].text1}</h2>
                            <p>{content[3].text2}</p>
                            <a href="#/">
                                Read more
                                <ChevronRight href="#/" color="white" size='20'/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="each-fade">
                    <div className="imgHome home5">
                        <div>
                            <h2>{content[4].text1}</h2>
                            <p>{content[4].text2}</p>
                            <a href="#/">
                                Read more
                                <ChevronRight href="#/" color="white" size='20'/>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="each-fade">
                    <div className="imgHome home6">
                        
                        <div>
                            <h2>{content[5].text1}</h2>
                            <p>{content[5].text2}</p>
                            <a href="#/">
                                Read more
                                <ChevronRight href="#/" color="white" size='20'/>
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
  }
}

