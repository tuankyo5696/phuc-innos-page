import React from 'react'

import './../../../../components/homepageInnos/clients/clients.scss'
const NhaTrang = props => {
    let nhatrangItem = props.activeNhatrang ?
    <div id="main-slider-5" className="swiper-slide main-slide" data-swiper-slide-index="4">
        <div className="slide-wrapper">
            <div className="content">
                <h3 className="title">Nha Trang University</h3>
                <p className="caption">Nha Trang University (NTU) which is located in reputedly 
                    the most beautiful coastal city in Vietnam. NTU is one of 50 public universities 
                    in Vietnam with more than 50 years of history and development.</p>
            </div>
            <figure className="clients-image clients5">
            </figure>
        </div>
    </div>:""
    return (
        <> 
            {nhatrangItem}
            </>
    )
}
export default NhaTrang;