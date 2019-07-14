import React from 'react'

import './../../../../components/homepageInnos/clients/clients.scss'
const SongTan = props => {
    let songtanItems = props.activeSongTan ?
    <div id="main-slider-6" className="swiper-slide main-slide" data-swiper-slide-index="5">
        <div className="slide-wrapper">
            <div className="content">
                <h3 className="title">Song Tan</h3>
                <p className="caption">Song Tan Production - Trade - Service - Import - 
                    Export Co., Ltd., whose main function is to co-operate with retailers of 
                    IT products, bring products from the world's leading brands. to Vietnamese users by the best quality of service</p>
                
            </div>
            <figure className="clients-image clients6">
            </figure>
        </div>
    </div>:""
    return (
        <> 
            {songtanItems}
            </>
    )
}
export default SongTan;