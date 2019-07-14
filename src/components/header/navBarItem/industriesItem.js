import React from 'react'
import { ChevronRight } from 'react-feather'
import pic1 from './../../../assets/img/media/header/31.png'
import pic2 from './../../../assets/img/media/header/32.png'
const industriesItem = props => {
    let classHover = ["coverDropdown", ""] //in-view
    if (props.isHoverIndustries) {
        classHover = ["coverDropdown", 'in-view']
    }
    let classHover2 = ["dropdown-content","in-view"]
    return (
        <div className={classHover.join(" ")} onMouseEnter ={props.enter} onMouseLeave= {props.leave}>
        <div className={classHover2.join(" ")} style ={{position : 'absolute'}}>
                <div className="coverElm">
                    <div className="ddElm">
                        <div className="dd1">
                            <img alt="img" className="imgHeader" src={pic1}></img>  
                        </div>
                        <div className="dd2">
                            <h3>{props.data[4].title}</h3>
                            <p>{props.data[4].content}</p>
                            <a href="/">
                                Read more
                                <ChevronRight href="#/" style={{color:'$blue'}} size='20'/>
                            </a>
                        </div>
                    </div>

                    <div className="ddElm">
                        <div className="dd1">
                            <img alt="img" className="imgHeader" src={pic2}></img>
                        </div>
                        <div className="dd2">
                            <h3>{props.data[5].title}</h3>
                            <p>{props.data[5].content}</p>
                            <a  href="/">
                                Read more
                                <ChevronRight href="/ " style={{color:'$blue'}} size='20'/>
                            </a>
                        </div>
                    </div>
                    <div className="ddElm3">
                        <div>
                            <p>{props.data[4].title}</p>
                            <p>{props.data[5].title}</p>
                            <p>Logistics</p>
                            <p>Retail & Ecommerce</p>
                        </div>

                    </div>
                </div>

        </div>
    </div>
    )
}
export default industriesItem;