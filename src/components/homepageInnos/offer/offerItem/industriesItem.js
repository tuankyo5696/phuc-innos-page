import React from 'react'
 

const industriesItem = props => {
    let industriesItems = props.activeIndustries ? 
    <div className="offers-tabcontent industries">
    <div>
        <div className="tabcontent-item">
            <div className="imgOffers of9"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataIndustries[0].title}</h3>
                <p className="offer-content-description">
                    {props.dataIndustries[0].content} </p>
            </div>
        </div>
        <div className="tabcontent-item">
            <div className="imgOffers of10"></div>
            <div className="offer-content">
                <h3 className="offer-content-title">{props.dataIndustries[1].title} </h3>
                <p className="offer-content-description">
                {props.dataIndustries[1].content}
                </p>
            </div>
        </div>
    </div>

    <div>
        <div className="tabcontent-item">
            <div className="imgOffers of11"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataIndustries[2].title} </h3>
                <p className="offer-content-description">
                {props.dataIndustries[2].content}
                </p>
            </div>
        </div>
        <div className="tabcontent-item">
            <div className="imgOffers of12"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataIndustries[3].title}</h3>
                <p className="offer-content-description">
                {props.dataIndustries[3].title}
                </p>
            </div>
        </div>
    </div>
  </div> : ""
    return (
             <>
            {industriesItems}
            </>
    )
}
export default industriesItem;