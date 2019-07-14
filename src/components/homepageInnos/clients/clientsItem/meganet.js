import React from 'react'
import './../../../../components/homepageInnos/clients/clients.scss'

const Mega = props => {
    let megaItem = props.activeMega ?
    <div id="main-slider-1" className="swiper-slide main-slide disapear" data-swiper-slide-index="0">
        <div className="slide-wrapper">
            <div className="content">
                <h3 className="title">Meganet</h3>
                <p className="caption caption_appear">
                    Meganet is Vietnam #1 company in Wireless Networks, Wireless Routers,
                    Wi-Fi Marketing and Network Appliances</p>
            </div>
            <div className="content-client">
            <figure className="clients-image clients1"></figure>
            </div>
        </div>
    </div>:""
    return (
        <> 
            {megaItem}
            </>
    )
}
export default Mega;