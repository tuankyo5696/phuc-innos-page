import React from "react"
import "./clients.scss"
import logo1 from './../../../assets/img/media/clientsuccess/logo1.png'
//import hv1 from './../../../assets/img/media/clientsuccess/img1.jpg'

import logo2 from './../../../assets/img/media/clientsuccess/logo2.png'
//import hv2 from './../../../assets/img/media/clientsuccess/img2.jpg'

import logo3 from './../../../assets/img/media/clientsuccess/logo3.png'
//import hv3 from './../../../assets/img/media/clientsuccess/img3.jpg'

import logo4 from './../../../assets/img/media/clientsuccess/logo4.png'
//import hv4 from './../../../assets/img/media/clientsuccess/img4.jpg'

import logo5 from './../../../assets/img/media/clientsuccess/logo5.png'
//import hv5 from './../../../assets/img/media/clientsuccess/img5.jpg'

import logo6 from './../../../assets/img/media/clientsuccess/logo6.png'
//import hv6 from './../../../assets/img/media/clientsuccess/img6.jpg'


const Clients = (props) => {

		let attachClasses = ["clients-success", ""]
		if (props.scroll) {
				attachClasses = ["clients-success", "in-view"]
		}

    return (
    <section className={attachClasses.join(" ")}>
			<div className="container">
				<h2 className="title title--black"> Client Success </h2>
				{/* <a href="#/" className="all-link"></a> */}
				<div className="swiper-container main-slider swiper-container-horizontal">
					<div className="swiper-wrapper">
						<div id="main-slider-1" className="swiper-slide main-slide disapear" data-swiper-slide-index="0">
							<div className="slide-wrapper">
								<div className="content">
									<h3 className="title">Meganet</h3>
									<p className="caption caption_appear">Meganet is Vietnam #1 company in Wireless Networks, Wireless Routers, Wi-Fi Marketing and Network Appliances</p>
								</div>
								<div className="content-client">
								<figure className="clients-image clients1"></figure>
								</div>
								
							</div>
						</div>
						<div id="main-slider-2" className="swiper-slide main-slide" data-swiper-slide-index="1">
							<div className="slide-wrapper">
								<div className="content">
									<h3 className="title">Haivanship</h3>
									<p className="caption">Haivanship own fleet of tugboats, barges, 
																	buoys and other facilities… we are providing services asf:Harbor Tug, Towage, 
																	Marine Salvage, Oil Spill Response, Water way transportation, Port Shipping Agency</p>
								</div>
								<figure className="clients-image clients2">
									{/* <img src={hv} className="entity-img" alt="Eurostar"/> */}
								</figure>
							</div>
						</div>
						<div id="main-slider-3" className="swiper-slide main-slide" data-swiper-slide-index="2">
							<div className="slide-wrapper">
								<div className="content">
									<h3 className="title">Luong quoi</h3>
									<p className="caption">Luong Quoi Coconut Processing Co., Ltd has continuously 
																	promoted the production line, improving the quality of products with the desire to bring the best products to consumers</p>
								</div>
								<figure className="clients-image clients3">
									{/* <img src={hv3} className="entity-img" alt="Harley-Davidson"/> */}
								</figure>
							</div>
						</div>
						<div id="main-slider-4" className="swiper-slide main-slide" data-swiper-slide-index="3">
							<div className="slide-wrapper">
								<div className="content">
									<h3 className="title">Thanh Hoai</h3>
									<p className="caption">One of the largest pharmacy in Nha Trang city</p>
								</div>
								<figure className="clients-image clients4">
									{/* <img src={hv4} className="entity-img" alt="Ernst &amp; Young"/> */}
								</figure>
							</div>
						</div>
						<div id="main-slider-5" className="swiper-slide main-slide" data-swiper-slide-index="4">
							<div className="slide-wrapper">
								<div className="content">
									<h3 className="title">Nha Trang University</h3>
									<p className="caption">Nha Trang University (NTU) which is located in reputedly 
																	the most beautiful coastal city in Vietnam. NTU is one of 50 public universities 
																	in Vietnam with more than 50 years of history and development.</p>
								</div>
								<figure className="clients-image clients5">
									{/* <img src={hv5} className="entity-img" alt="Guinness"/> */}
								</figure>
							</div>
						</div>
						<div id="main-slider-6" className="swiper-slide main-slide" data-swiper-slide-index="5">
							<div className="slide-wrapper">
								<div className="content">
									<h3 className="title">Song Tan</h3>
									<p className="caption">Song Tan Production - Trade - Service - Import - 
																	Export Co., Ltd., whose main function is to co-operate with retailers of 
																	IT products, bring products from the world's leading brands. to Vietnamese users by the best quality of service</p>
									
								</div>
								<figure className="clients-image clients6">
									{/* <img src={hv6} className="entity-img" alt="Jaguar Land Rover"/> */}
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className="swiper-container nav-slider swiper-container-horizontal">
					<div className="swiper-wrapper">
						<div id="nav-slider-1" className="swiper-slide nav-slide" data-swiper-slide-index="0">
							<figure className="logo-nav">
								<img style={{height: '50px',width: '110px !important',maxWidth: '245px !important'}} src={logo1} 
								className="entity-img entity-img--nav" alt="Meganet"/>
												</figure>
						</div>
						<div id="nav-slider-2" className="swiper-slide nav-slide" data-swiper-slide-index="1">
							<figure className="logo-nav">
								<img style={{height: '39px',
										width: '101px'}} src={logo2} className="entity-img entity-img--nav" alt="haivanship"/>
												</figure>
						</div>
						<div id="nav-slider-3" className="swiper-slide nav-slide" data-swiper-slide-index="2">
							<figure className="logo-nav">
								<img style={{height: '81px',
																	width: '124px'}} src={logo3} 
																	className="entity-img entity-img--nav" alt="Luongquoi"/>
												</figure>
						</div>
						<div id="nav-slider-4" className="swiper-slide nav-slide" data-swiper-slide-index="3">
							<figure className="logo-nav">
								<img style={{height: '40px', width: '110px',maxWidth: '135px'}}
																	src={logo4} className="entity-img entity-img--nav" alt="ThanhHoai"/>
												</figure>
						</div>
						<div id="nav-slider-5" className="swiper-slide nav-slide" data-swiper-slide-index="4">
							<figure className="logo-nav">
															<img src={logo5} 
															className="entity-img entity-img--nav" alt="Nha Tang University"/>
												</figure>
						</div>
						<div id="nav-slider-6" className="swiper-slide nav-slide" data-swiper-slide-index="5">
							<figure className="logo-nav">
								<img style={{height: '51px',
																	width: '100px',
																	maxWidth: '100px'}} src={logo6} className="entity-img entity-img--nav" alt="Song Tan"/>
												</figure>
						</div>
						{/* <div id="nav-slider-7" className="swiper-slide nav-slide" data-swiper-slide-index="6" onclick="changeSlide(7)">
							<figure className="logo-nav">
								<img src="https://forbim.com.vn/upload/img/ForBIM_AEC2.png" className="entity-img entity-img--nav" alt="ForBIM., Ltd"/>
												</figure>
						</div>
						<div id="nav-slider-8" className="swiper-slide nav-slide" data-swiper-slide-index="1" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(8)">
							<figure className="logo-nav">
								<img src="img/eurostar.svg" className="entity-img entity-img--nav" alt="Eurostar"/>
												</figure>
						</div>
						<div id="nav-slider-9" className="swiper-slide nav-slide" data-swiper-slide-index="2" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(9)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/harley-davidson.svg" className="entity-img entity-img--nav" alt="Harley-Davidson"/>
												</figure>
						</div>
						<div id="nav-slider-10" className="swiper-slide nav-slide" data-swiper-slide-index="3" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(10)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/ernst-young.svg" className="entity-img entity-img--nav" alt="Ernst &amp; Young"/>
												</figure>
						</div>
						<div id="nav-slider-11" className="swiper-slide nav-slide" data-swiper-slide-index="4" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(11)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/guinness.svg" className="entity-img entity-img--nav" alt="Guinness"/>
												</figure>
						</div>
						<div id="nav-slider-12" className="swiper-slide nav-slide" data-swiper-slide-index="5" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(12)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/jaguar-talk.svg" className="entity-img entity-img--nav" alt="Jaguar Land Rover"/>
												</figure>
						</div>
						<div id="nav-slider-13" className="swiper-slide nav-slide" data-swiper-slide-index="0" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(13)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/cirrus.svg" className="entity-img entity-img--nav" alt="Cirruspath"/>
												</figure>
						</div>
						<div id="nav-slider-14" className="swiper-slide nav-slide" data-swiper-slide-index="1" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(14)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/eurostar.svg" className="entity-img entity-img--nav" alt="Eurostar"/>
												</figure>
						</div>
						<div id="nav-slider-15" className="swiper-slide nav-slide" data-swiper-slide-index="2" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(15)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/harley-davidson.svg" className="entity-img entity-img--nav" alt="Harley-Davidson"/>
												</figure>
						</div>
						<div id="nav-slider-16" className="swiper-slide nav-slide swiper-slide-duplicate-prev" data-swiper-slide-index="3" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(16)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/ernst-young.svg" className="entity-img entity-img--nav" alt="Ernst &amp; Young"/>
												</figure>
						</div>
						<div id="nav-slider-17" className="swiper-slide nav-slide swiper-slide-duplicate-active" data-swiper-slide-index="4" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(17)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/guinness.svg" className="entity-img entity-img--nav" alt="Guinness"/>
												</figure>
						</div>
						<div id="nav-slider-18" className="swiper-slide nav-slide swiper-slide-duplicate-next" data-swiper-slide-index="5" style={{width: '185px', transition: 'all 0ms ease 0s', marginRight: '2px'}} onclick="changeSlide(18)">
							<figure className="logo-nav" style={{transition: 'all 0ms ease 0s'}}>
								<img src="img/jaguar-talk.svg" className="entity-img entity-img--nav" alt="Jaguar Land Rover"/>
												</figure>
						</div> */}
					</div>
				</div>
			</div>
	</section>

    )
}

export default Clients
