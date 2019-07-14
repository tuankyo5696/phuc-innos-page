import React, { Component } from "react"
import "./clients.scss"
import logo1 from './../../../assets/img/media/clientsuccess/logo1.png'

import logo2 from './../../../assets/img/media/clientsuccess/logo2.png'
import logo3 from './../../../assets/img/media/clientsuccess/logo3.png'
import logo4 from './../../../assets/img/media/clientsuccess/logo4.png'
import logo5 from './../../../assets/img/media/clientsuccess/logo5.png'
import logo6 from './../../../assets/img/media/clientsuccess/logo6.png'

import Mega from './clientsItem/meganet'
import HaiVan from "./clientsItem/haivanship";
import LuongQuoi from "./clientsItem/luongquoi";
import ThanhHoai from "./clientsItem/thanhhoai";
import NhaTrang from "./clientsItem/nhatrang";
import SongTan from "./clientsItem/songtan";

class Clients extends Component {

	state = {
		activeMega: true,
		activeHaivan: false,
		activeLuongQuoi: false,
		activeThanhHoai: false,
		activeNhatrang: false,
		activeSongTan: false,
		toggleClass:''
	};

	activeMega = () =>{
        this.setState({
            activeMega: true,
			activeHaivan: false,
			activeLuongQuoi: false,
			activeThanhHoai: false,
			activeNhatrang: false,
			activeSongTan: false,
        })
    }
    activeHaivan = () => {
        this.setState({
			activeMega: false,
			activeHaivan: true,
			activeLuongQuoi: false,
			activeThanhHoai: false,
			activeNhatrang: false,
			activeSongTan: false,
        })
	}
	activeLuongQuoi = () => {
        this.setState({
			activeMega: false,
			activeHaivan: false,
			activeLuongQuoi: true,
			activeThanhHoai: false,
			activeNhatrang: false,
			activeSongTan: false,
        })
	}
	activeThanhHoai = () => {
        this.setState({
			activeMega: false,
			activeHaivan: false,
			activeLuongQuoi: false,
			activeThanhHoai: true,
			activeNhatrang: false,
			activeSongTan: false,
        })
	}
	activeNhatrang = () => {
        this.setState({
			activeMega: false,
			activeHaivan: false,
			activeLuongQuoi: false,
			activeThanhHoai: false,
			activeNhatrang: true,
			activeSongTan: false,
        })
	}
	activeSongTan = () => {
        this.setState({
			activeMega: false,
			activeHaivan: false,
			activeLuongQuoi: false,
			activeThanhHoai: false,
			activeNhatrang: false,
			activeSongTan: true,
        })
	}



	render() {
		let attachClasses = ["clients-success", ""]
		if (this.props.scroll) {
			attachClasses = ["clients-success", "in-view"]
		}
		return (
			<section className={attachClasses.join(" ")}>
					<div className="container">
						<h2 className="title title--black"> Client Success </h2>
						<div className="swiper-container main-slider swiper-container-horizontal">
							<div className="swiper-wrapper">
								<Mega activeMega = {this.state.activeMega}></Mega>
								<HaiVan activeHaivan = {this.state.activeHaivan}></HaiVan>
								<LuongQuoi activeLuongQuoi = {this.state.activeLuongQuoi}></LuongQuoi>
								<ThanhHoai activeThanhHoai = {this.state.activeThanhHoai}></ThanhHoai>
								<NhaTrang activeNhatrang = {this.state.activeNhatrang}></NhaTrang>
								<SongTan activeSongTan={this.state.activeSongTan}></SongTan>

							</div>
						</div>
						<div className="swiper-container nav-slider swiper-container-horizontal">
							<div className="swiper-wrapper">
								<div id="nav-slider-1" className="swiper-slide nav-slide" data-swiper-slide-index="0">
									<figure className="logo-nav">
									<img style={{ height: '50px', width: '110px !important', maxWidth: '245px !important' }}
										src={logo1} 
										className="entity-img entity-img--nav" alt="Meganet" onClick = {this.activeMega}/>
									</figure>
								</div>
								<div id="nav-slider-2" className="swiper-slide nav-slide" data-swiper-slide-index="1">
									<figure className="logo-nav">
										<img style={{ height: '39px', width: '101px' }}
										src={logo2} className="entity-img entity-img--nav" alt="haivanship" onClick = {this.activeHaivan}
									/>
									</figure>
								</div>
								<div id="nav-slider-3" className="swiper-slide nav-slide" data-swiper-slide-index="2">
									<figure className="logo-nav">
										<img style={{height: '81px',width: '124px'}} src={logo3}
											className="entity-img entity-img--nav" alt="Luongquoi" onClick = {this.activeLuongQuoi}/>
									</figure>
								</div>
								<div id="nav-slider-4" className="swiper-slide nav-slide" data-swiper-slide-index="3">
									<figure className="logo-nav">
										<img style={{height: '40px', width: '110px',maxWidth: '135px'}}
											src={logo4} className="entity-img entity-img--nav" alt="ThanhHoai" onClick = {this.activeThanhHoai}/>
									</figure>
								</div>
								<div id="nav-slider-5" className="swiper-slide nav-slide" data-swiper-slide-index="4">
									<figure className="logo-nav">
									<img src={logo5} className="entity-img entity-img--nav" alt="Nha Tang University"
										onClick={this.activeNhatrang} />
									</figure>
								</div>
								<div id="nav-slider-6" className="swiper-slide nav-slide" data-swiper-slide-index="5">
									<figure className="logo-nav">
										<img style={{ height: '51px', width: '100px', maxWidth: '100px' }}
											src={logo6} className="entity-img entity-img--nav" alt="Song Tan" onClick = {this.activeSongTan}/>
									</figure>
								</div>

							</div>
						</div>
					</div>
			</section>

			)

	}




}

export default Clients
