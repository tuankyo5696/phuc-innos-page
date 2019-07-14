import React from 'react'

import './../../../../components/homepageInnos/clients/clients.scss'
const LuongQuoi = props => {
    let luongquoiItem = props.activeLuongQuoi ?
    <div id="main-slider-3" className="swiper-slide main-slide" data-swiper-slide-index="2">
        <div className="slide-wrapper">
            <div className="content">
                <h3 className="title">Luong quoi</h3>
                <p className="caption">Luong Quoi Coconut Processing Co., Ltd has continuously
                promoted the production line, improving the quality of products
                with the desire to bring the best products to consumers</p>
            </div>
            <figure className="clients-image clients3">
            </figure>
        </div>
    </div>:""
    return (
        <>
            {luongquoiItem}
            </>
    )
}
export default LuongQuoi;