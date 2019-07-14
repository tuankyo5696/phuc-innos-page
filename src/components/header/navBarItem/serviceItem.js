import React from 'react'
import { ChevronRight } from 'react-feather'
import pic1 from './../../../assets/img/media/header/21.png'
import pic2 from './../../../assets/img/media/header/22.png'
const serviceItem = props => {
    let classHover = ["coverDropdown", ""] //in-view
    if (props.isHoverService) {
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
                            <h3>{props.data[2].title}</h3>
                            <p>{props.data[2].content}</p>
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
                            <h3>{props.data[3].title}</h3>
                            <p>{props.data[3].content}</p>
                            <a  href="/">
                                Read more
                                <ChevronRight href="/ " style={{color:'$blue'}} size='20'/>
                            </a>
                        </div>
                    </div>
                    <div className="ddElm3">
                        <div>
                            <p>{props.data[3].title}</p>
                            <p>Web App Application</p>
                            <p>{props.data[2].title}</p>
                            <p>IT consulting</p>
                        </div>

                    </div>
                </div>

        </div>
    </div>
    )
}
export default serviceItem;