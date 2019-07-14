import React from 'react'
import { ChevronRight } from 'react-feather'
import pic1 from './../../../assets/img/media/header/11.png'
import pic2 from './../../../assets/img/media/header/12.png'
const solutionItem = props => {
    let classHover = ["coverDropdown", ""] //in-view
    if (props.isHoverSolution) {
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
                            <h3>{props.data[0].title}</h3>
                            <p>{props.data[0].content}</p>
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
                            <h3>{props.data[1].title}</h3>
                            <p>{props.data[1].content}</p>
                            <a  href="/">
                                Read more
                                <ChevronRight href="/ " style={{color:'$blue'}} size='20'/>
                            </a>
                        </div>
                    </div>
                    <div className="ddElm3">
                        <div>
                            <p>{props.data[0].title}</p>
                            <p>{props.data[1].title}</p>
                            <p>Cloud Computing</p>
                            <p>Artificial Intelligent</p>
                        </div>

                    </div>
                </div>

        </div>
    </div>
    )
}
export default solutionItem;