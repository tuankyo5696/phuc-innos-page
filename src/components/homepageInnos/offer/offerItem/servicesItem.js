import React from 'react'

const servicesItem = props => {
    let servicesItem = props.activeServices ?
    <div className="offers-tabcontent services">
    <div>
        <div className="tabcontent-item">
            <div className="imgOffers of5"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataServices[0].title}</h3>
                <p className="offer-content-description">
                    {props.dataServices[0].content} </p>
            </div>
        </div>
        <div className="tabcontent-item">
            <div className="imgOffers of6"></div>
            <div className="offer-content">
                <h3 className="offer-content-title">{props.dataServices[1].title} </h3>
                <p className="offer-content-description">
                {props.dataServices[1].content}
                </p>
            </div>
        </div>
    </div>

    <div>
        <div className="tabcontent-item">
            <div className="imgOffers of7"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataServices[2].title} </h3>
                <p className="offer-content-description">
                {props.dataServices[2].content}
                </p>
            </div>
        </div>
        <div className="tabcontent-item">
            <div className="imgOffers of8"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataServices[3].title}</h3>
                <p className="offer-content-description">
                {props.dataServices[3].title}
                </p>
            </div>
        </div>
    </div>
  </div>
    : ""
    return (
        <>
          {servicesItem}  
        </>
    )
}
export default servicesItem;