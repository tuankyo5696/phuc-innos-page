import React, { Component } from "react"
import Header from './../header/header'
import Footer from './../footer/footer'
import './../../styles/index.scss'




class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      scroll : false,
    }

  }  
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

 
    handleScroll = (e) => {
        window.scrollY === 0 ? this.setState({scroll: false}) : this.setState({scroll: true})
        window.scrollY > 800 ? this.setState({ scrolling: true }) : this.setState({ scrolling: false })
        console.log(window.scrollY);
    }

    componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
    }

  

  render(){
    return(
      <div>
            <Header scroll={this.state.scrolling}/>
              <div style={{backgroundColor: 'rgba(233, 232, 233, 0)'}}>
                {this.props.children}
                <Footer className="container-fluid"/>
              </div>
      </div>
      
  )
  }
  
}


export default Layout