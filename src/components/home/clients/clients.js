import React, { Fragment, useState, useEffect } from "react"
import "./clients.scss"

import { Spring } from 'react-spring/renderprops'

const BoxAnimation = ({ content }) => {
  const [activeKey, setActiveKey] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      const flag = activeKey < content.length - 1 ? activeKey + 1 : 0
      setActiveKey(flag)
    }, 4000)
  })

  return (
    <Spring
      from={{ number: 0 }}
      to={{ number: 1 }}
      config={{
        tension: 580,
        friction: 120
      }}
      delay={0}
      reset={true}
    >
      {props => {
        return (
          <div className='testimonial' style={{ opacity: props.number }}>
            {content[activeKey].text}
          </div>
        )
      }}
    </Spring>
  )
}

const Clients = (props) => {
  let attachClasses = ["animate default right", ""]
  let attachClasses2 = ["toggleSmile", ""]

  if (props.scroll) {
      attachClasses = ["animate default right", "in-view"]
      attachClasses2 = ["toggleSmile", "in-view"]
  }

  const content = [
    {
      key: 0,
      text: (
        <Fragment>
          <p><span>Everyone has had such positive feedback about the smoothness
            and professionalism of how it all went, which is a testament to all
            your hard work over many months.</span></p>
          <p className="attribution"><span>Clients – International Legal Firm</span></p>
        </Fragment>
      )
    },
    {
      key: 1,
      text: (
        <Fragment>
          <p><span>Our event was great success thanks to the amazing team we had onsite,
            who not only deliver but go the extra mile to exceed everybody's expectations.</span></p>
          <p className="attribution"><span>Global Congress &amp; Engagement Strategy Lead, Healthcare</span></p>
        </Fragment>
      )
    },
    {
      key: 2,
      text: (
        <Fragment>
          <p><span>Thanks for all your dedication, expertise and professionalism
            in bringing the meeting to life once again.</span></p>
          <p className="attribution"><span>Healthcare Event Stakeholder</span></p>
        </Fragment>
      )
    },
    {
      key: 3,
      text: (
        <Fragment>
          <p><span>This really is a high-stakes event for the team and you made 
              a very challenging event look easy to execute.</span></p>
          <p className="attribution"><span>Healthcare Event Stakeholder</span></p>
        </Fragment>
      )
    },
    {
      key: 4,
      text: (
        <Fragment>
          <p><span>There are so many complexities with an event like this – 
              thanks to such an expert team it was flawlessly delivered.</span></p>
          <p className="attribution">
              <span>Healthcare Event Stakeholder</span></p>
        </Fragment>
      )
    },
    {
      key: 5,
      text: (
        <Fragment>
          <p><span>I am really delighted with how the meeting went, and just 
              wanted to thank you all for your energy&nbsp;and commitment – 
              looking forward to working with you again!</span></p>
          <p className="attribution"><span>Franchise Leader, Healthcare Company</span></p>
        </Fragment>
      )
    },
    {
      key: 6,
      text: (
        <Fragment>
          <p><span>We've had great feedback – 85% said the day was ‘fantastic’ 
              (15% said ‘good’) – you were a massive part of that.</span></p>
          <p className="attribution"><span>UK Charity Trustee</span></p>
        </Fragment>
      )
    },
    {
      key: 7,
      text: (
        <Fragment>
          <p><span>I'm not sure I ever really knew what an events management 
              team could do before we met you, and you've all opened my eyes
                  to how important your work is.</span></p>
          <p className="attribution"><span>UK Charity Trustee</span></p>
        </Fragment>
      )
    },
    {
      key: 8,
      text: (
        <Fragment>
          <p><span>I have found Medi Square to be an outstanding agency – they make 
              the process effortless, understand the pharmaceutical industry 
              very well and have a solution-focused approach to situations.</span></p>
          <p className="attribution"><span>Healthcare Medical Advisor</span></p>
        </Fragment>
      )
    },
    {
      key: 9,
      text: (
        <Fragment>
           <p><span>The whole team was absolutely exceptional: excellent client 
              service, responsiveness and delivery from start to finish.</span></p>
          <p className="attribution"><span>Pharma Communications Director</span></p>
        </Fragment>
      )
    },
  ]

  return (
    <div>
      <div className="clients" style={{ minHeight: '219px' }}>

        <div className="align-middle">
          <div className="ttaPadding">
            <div className="quote animate">
              <BoxAnimation content={content} />
            </div>
            <div className="smileIcon">
              <div className="divIcon">
                <div className={attachClasses2.join(" ")}>
                  <div className="cover divdraw">
                    <div className="bottom divdraw"></div>
                  </div>
                </div>
                
                <div className="tamgiac">
                  <svg height="50" width="50">
                    <polyline points="0 0, 0 50, 50 0, 0 50" style={{ fill: 'white', stroke: 'black', strokeWidth: '1' }} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clientsDiv">
          <div className="ttaPadding">
            <div className={attachClasses.join(" ")}>
              <h2>Our <strong>clients</strong></h2>
              <p>
                We work with forward-thinking global organisations
                across the healthcare, corporate and non-profit sectors to change
                    minds and lives through immersive events and experiences.
                            <br />
                <br />
                These programmes bring people together to expand their knowledge,
                solve problems, share ideas and identities, be inspired and invigorated,
                    and make lasting memories and connections.
                            <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Clients