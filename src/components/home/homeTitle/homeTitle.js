import React from "react"
import { Link } from "gatsby"
import { MessageCircle } from "react-feather"

import "./homeTitle.scss"


const HomeTitle = (props) => {
    let attachClasses = ["introText", ""]
    let attachClasses2 = ["logoBig", ""]
    if (props.scroll) {
        attachClasses = ["introText", "in-view"]
        attachClasses2 = ["logoBig", "in-view"]
    }

    return (
        <div>
            <div className="coverHomeTitle">
                <div className="intro">
                    <div className="introBookmark">
                        <div className={attachClasses2.join(" ")}></div>
                    </div>
                    <div className={attachClasses.join(" ")}> 
                        <h1>
                            <span className="major"><span>Looking beyond the obvious</span></span>
                            <span className="minor">to change lives and minds through events</span>
                        </h1>
                    </div>
                    <div className="messengerBox">
                        <div className="messContent">
                            <Link id="introContact" to="/contactus">
                                <div className="iconMess">
                                    <MessageCircle style={{ stroke: 'white', position: 'relative', left: '3px' }}></MessageCircle>
                                </div>
                                <div className="buttonStyle">
                                    <p className="getIn">
                                        Get in touch
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeTitle
