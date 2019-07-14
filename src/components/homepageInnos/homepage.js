import React, { Component } from "react"

import "./homepage.scss"
import HomePageTitle from './homepageTitle/homepageTitle'
import Offices from "./offices/offices";
import News from "./news/news";
import Clients from './clients/clients';
import About from './about/about';
import Offer from './offer/offer';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      scrolling : false,
      scrolling2: false,
      scrolling3: false,
      scrolling4: false,
    }

  }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('scroll', this.handleScroll2)
      window.addEventListener('scroll', this.handleScroll3)
      window.addEventListener('scroll', this.handleScroll4)
    }

    //About
    handleScroll = (e) => {
        window.scrollY > 300 && window.scrollY <1000 ? this.setState({ scrolling: true }) : this.setState({ scrolling: false })

    }

    //News
    handleScroll2 = (e) => {
      window.scrollY > 2500 && window.scrollY <3800 ? this.setState({ scrolling2: true }) : this.setState({ scrolling2: false })
    }

    //Offices
    handleScroll3 = (e) => {
      window.scrollY > 3500 ? this.setState({ scrolling3: true }) : this.setState({ scrolling3: false })
      console.log(window.scrollY);
    }
    //Clients
    handleScroll4 = (e) => {
      window.scrollY > 1900 && window.scrollY <2500 ? this.setState({ scrolling4: true }) : this.setState({ scrolling4: false })
      console.log(window.scrollY);
    }

    componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('scroll', this.handleScroll2);
      window.removeEventListener('scroll', this.handleScroll3);
      window.removeEventListener('scroll', this.handleScroll4);
    }


  render(){

    return (
      <div>
        <HomePageTitle></HomePageTitle>
        <div className="container-fluid">
            <About scroll={this.state.scrolling}></About>
            <Offer></Offer>
            <Clients scroll={this.state.scrolling4}></Clients>
            <News scroll={this.state.scrolling2}></News>
            <Offices scroll={this.state.scrolling3}></Offices>
        </div>
      </div>

    )
  }
}

export default HomePage
