import React, { Component } from "react"
import './home.scss'

import Partner from "./partnerships/partner";
import Difference from "./difference/difference";
import Approach from "./approach/approach";
import Services from "./services/services";
import Clients from "./clients/clients";
import HomeTitle from "./homeTitle/homeTitle";
import ClientsList from "./clientsList/clientsList";
//import {Link} from "gatsby"

class IndexPage extends Component{

    state = {
        scroll : false,
        scrolling1: false,
        scrolling2: false,
        scrolling3: false,
        scrolling4: false,
        scrolling5: false,
        scrolling6: false,
        
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('scroll', this.handleScroll1)
        window.addEventListener('scroll', this.handleScroll2)
        window.addEventListener('scroll',this.handleScroll3)
        window.addEventListener('scroll',this.handleScroll4)
        window.addEventListener('scroll',this.handleScroll5)
        window.addEventListener('scroll',this.handleScroll6)
    }

     //Clients
    handleScroll = (e) => {
        window.scrollY === 0 ? this.setState({scroll: false}) : this.setState({scroll: true})
        window.scrollY > 500 && window.scrollY < 1300 ? this.setState({ scrolling: true }) : this.setState({ scrolling: false })
        //console.log(window.scrollY);
    }


    //Services
    handleScroll1 = (e) => {
        window.scrollY > 900 && window.scrollY < 1600 ? this.setState({ scrolling1: true }) : this.setState({ scrolling1: false })
        
    }


    //Approach
    handleScroll2 = (e) => {
        window.scrollY > 1600 && window.scrollY < 2400? this.setState({ scrolling2: true }) : this.setState({ scrolling2: false })
    }

    //Difference
    handleScroll3 = (e) => {
        window.scrollY > 2150 && window.scrollY < 2600? this.setState({ scrolling3: true }) : this.setState({ scrolling3: false })
        console.log(window.scrollY);
    }
    handleScroll6 = (e) => {
        window.scrollY > 2400 && window.scrollY < 2700 ? this.setState({ scrolling6: true }) : this.setState({ scrolling6: false })
    }

    //Partner
    handleScroll4 = (e) => {
        window.scrollY > 2200 && window.scrollY < 3000 ? this.setState({ scrolling4: true }) : this.setState({ scrolling4: false })
    }

    //Home title
    handleScroll5 = (e) => {
        window.scrollY > 0 && window.scrollY < 1000 ? this.setState({ scrolling5: true }) : this.setState({ scrolling5: false })
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.handleScroll1);
        window.removeEventListener('scroll', this.handleScroll2);
        window.removeEventListener('scroll', this.handleScroll3);
        window.removeEventListener('scroll', this.handleScroll4);
        window.removeEventListener('scroll', this.handleScroll5);
      }


    render(){
        return(
            <div className="container-fluid body">
               <HomeTitle scroll={this.state.scrolling5}></HomeTitle>
			<hr className="white"/>
            <ClientsList></ClientsList>

                <Clients scroll={this.state.scrolling}></Clients>
			<hr className="shadow up"/>

                <Services scroll={this.state.scrolling1}></Services>
			<hr className="shadow"/>

                <Approach scroll={this.state.scrolling2}></Approach>
			<hr className="shadow up"/>

			    <Difference scroll={this.state.scrolling3} scroll2={this.state.scrolling6}></Difference> 
			<hr className="shadow"/>

			    <Partner scroll={this.state.scrolling4}></Partner>
		</div>


        )
    }
 
}

export default IndexPage
