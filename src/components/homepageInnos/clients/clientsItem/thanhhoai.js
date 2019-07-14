import React from 'react'

import './../../../../components/homepageInnos/clients/clients.scss'
const ThanhHoai = props => {
    let thanhhoaiItem = props.activeThanhHoai ?
    <div id="main-slider-4" className="swiper-slide main-slide" data-swiper-slide-index="3">
        <div className="slide-wrapper">
            <div className="content">
                <h3 className="title">Thanh Hoai</h3>
                <p className="caption">One of the largest pharmacy in Nha Trang city</p>
            </div>
            <figure className="clients-image clients4">
            </figure>
        </div>
    </div>:""
    return (
        <> 
            {thanhhoaiItem}
            </>
    )
}
export default ThanhHoai;