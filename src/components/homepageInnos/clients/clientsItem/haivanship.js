import React from 'react'
import './../../../../components/homepageInnos/clients/clients.scss'

const HaiVan = props => {
    let haivanItem = props.activeHaivan?
    <div id="main-slider-2" className="swiper-slide main-slide" data-swiper-slide-index="1">
            <div className="slide-wrapper">
                <div className="content">
                    <h3 className="title">Haivanship</h3>
                    <p className="caption">Haivanship own fleet of tugboats, barges, 
                        buoys and other facilities… we are providing services asf:Harbor Tug, Towage, 
                        Marine Salvage, Oil Spill Response, Water way transportation, Port Shipping Agency</p>
                </div>
                <figure className="clients-image clients2"></figure>
            </div>
        </div>:""
    return (
        <>
            {haivanItem}
            </>
    )
}
export default HaiVan;