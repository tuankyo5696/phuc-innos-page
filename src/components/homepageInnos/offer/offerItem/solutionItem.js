import React from 'react'



const solutionitem = props => {
    let solutionItems = props.activeSolution ? 
    <div className="offers-tabcontent solutions ">
    <div>
        <div className="tabcontent-item">
            <div className="imgOffers of1"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataSolutions[0].title}</h3>
                <p className="offer-content-description">
                    {props.dataSolutions[0].content} </p>
            </div>
        </div>
        <div className="tabcontent-item">
            <div className="imgOffers of2"></div>
            <div className="offer-content">
                <h3 className="offer-content-title">{props.dataSolutions[1].title} </h3>
                <p className="offer-content-description">
                {props.dataSolutions[1].content}
                </p>
            </div>
        </div>
    </div>

    <div>
        <div className="tabcontent-item">
            <div className="imgOffers of3"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataSolutions[2].title} </h3>
                <p className="offer-content-description">
                {props.dataSolutions[2].content}
                </p>
            </div>
        </div>
        <div className="tabcontent-item">
            <div className="imgOffers of4"></div>
            <div className="offer-content">
                <h3 className="offer-content-title"> {props.dataSolutions[3].title}</h3>
                <p className="offer-content-description">
                {props.dataSolutions[3].title}
                </p>
            </div>
        </div>
    </div>
  </div>
    : ""
    return (
        <>
           {solutionItems} 
        </>

    )
}
export default solutionitem