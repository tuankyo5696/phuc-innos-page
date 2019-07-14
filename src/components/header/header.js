import React from "react"
import { Link } from "gatsby"
import './header.scss'
import './../../styles/index.scss'
import logo from "./../../assets/img/media/colorfulLogo.png"
import SolutionItem from './navBarItem/solutionItem';
import ServiceItem from './navBarItem/serviceItem';
import IndustriesItem from './navBarItem/industriesItem';
import ResourcesItem from './navBarItem/resourcesItem';
import ClientItem from './navBarItem/clientItem';
import CompanyItem from './navBarItem/companyItem';
import { Menu } from 'react-feather';
import { DATA } from './../../data/staticData';
class Header extends React.Component {

    state = {
        active: false,
        toggleClass: '',
        animation: '',
        isHoverSolution: false,
        isHoverService: false,
        isHoverIndustries: false,
        isHoverResources: false,
        isHoverClient: false,
        isHoverCompany: false
    }

    onMouseEnterHandlerSolution = () => {
        this.setState({
            isHoverSolution: true,
            isHoverService: false,
            isHoverIndustries: false,
            isHoverResources: false,
            isHoverClient: false,
            isHoverCompany: false
        })

    }
    onMouseLeaveHandlerSolution = () => {
        this.setState({
            isHoverSolution: false
        })
    }
    onMouseEnterHandlerService = () => {
        this.setState({
            isHoverService: true,
            isHoverSolution: false,
            isHoverIndustries: false,
            isHoverResources: false,
            isHoverClient: false,
            isHoverCompany: false
        })
    }
    onMouseLeaveHandlerService = () => {
        this.setState({
            isHoverService: false
        })
    }
    onMouseEnterHandlerIndustries = () => {
        this.setState({
            isHoverService: false,
            isHoverSolution: false,
            isHoverIndustries: true,
            isHoverResources: false,
            isHoverClient: false,
            isHoverCompany: false
        })
    }
    onMouseLeaveHandlerIndustries = () => {
        this.setState({
            isHoverIndustries: false
        })
    }
    onMouseEnterHandlerResources = () => {
        this.setState({
            isHoverService: false,
            isHoverSolution: false,
            isHoverIndustries: false,
            isHoverResources: true,
            isHoverClient: false,
            isHoverCompany: false
        })
    }
    onMouseLeaveHandlerResources = () => {
        this.setState({
            isHoverResources: false
        })
    }
    onMouseEnterHandlerClient = () => {
        this.setState({
            isHoverService: false,
            isHoverSolution: false,
            isHoverIndustries: false,
            isHoverResources: false,
            isHoverClient: true,
            isHoverCompany: false
        })
    }
    onMouseLeaveHandlerClient = () => {
        this.setState({
            isHoverClient: false
        })
    }
    onMouseEnterHandlerCompany = () => {
        this.setState({
            isHoverService: false,
            isHoverSolution: false,
            isHoverIndustries: false,
            isHoverResources: false,
            isHoverClient: false,
            isHoverCompany: true
        })
    }
    onMouseLeaveHandlerCompany = () => {
        this.setState({
            isHoverCompany: false
        })
    }
    addResponsiveClass = () => {
        const currentState = this.state.active;
        this.setState({
            active: !currentState,
            toggleClass: this.state.toggleClass
                === 'responsive' ? '' : 'responsive',
            animation: this.state.animation === 'animate' ? '' : 'animate'

        });
    }
    render() {

        const data = DATA;
        const { toggleClass, animation } = this.state;
        let attachClasses = ["header", ""]
        let attachClasses2 = ["nav-item", ""]
        let attachClasses3 = ["logo", ""]


        if (this.props.scroll) {
            attachClasses = ["header", "scroll"]
            attachClasses2 = ["nav-item", "scroll"]
            attachClasses3 = ["logo", "scroll"]
        }


        return (
            <header className={attachClasses.join(" ")}>
                <div className="coverHeader">
                    <div className={`classLogo ${toggleClass}`}>
                        <Link to="/">
                            <img src={logo} alt="Logo" className={`${attachClasses3.join(" ")} ${toggleClass}`} />
                        </Link>
                    </div>

                    <div className={`navbarItem ${toggleClass}`}>
                        <nav className="fixed-nav-bar">
                            <div className={`top-nav ${toggleClass}`}>
                                <div className={`cover-nav-item ${animation}`}>
                                    <div className="dropdown"
                                        onMouseEnter={this.onMouseEnterHandlerSolution}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Link className={`${attachClasses2.join(" ")} ${toggleClass}`}
                                            activeClassName="active-nav-item" to="/solutions">
                                            SOLUTIONS
                                            </Link>
                                    </div>
                                    <div className="dropdown"
                                        onMouseEnter={this.onMouseEnterHandlerService}
                                    >
                                        <Link className={`${attachClasses2.join(" ")} ${toggleClass}`}
                                            activeClassName="active-nav-item" to="/services">
                                            SERVICES
                                            </Link>
                                    </div>

                                    <div className="dropdown" onMouseEnter={this.onMouseEnterHandlerIndustries}>
                                        <Link className={`${attachClasses2.join(" ")} ${toggleClass}`}
                                            activeClassName="active-nav-item" to="/industries">
                                            INDUSTRIES
                                            </Link>
                                    </div>
                                    <div className="dropdown" onMouseEnter={this.onMouseEnterHandlerResources}>
                                        <Link className={`${attachClasses2.join(" ")} ${toggleClass}`}
                                            activeClassName="active-nav-item" to="/resources">
                                            RESOURCES
                                            </Link>
                                    </div>
                                    <div className="dropdown" onMouseEnter={this.onMouseEnterHandlerClient}>
                                        <Link className={`${attachClasses2.join(" ")} ${toggleClass}`}
                                            activeClassName="active-nav-item" to="/clients">
                                            CLIENTS
                                            </Link>
                                    </div>
                                    <div className="dropdown" onMouseEnter={this.onMouseEnterHandlerCompany}>
                                        <Link className={`${attachClasses2.join(" ")} ${toggleClass}`}
                                            activeClassName="active-nav-item" to="/company">
                                            COMPANY
                                            </Link>
                                    </div>
                                    <div className="dropdown">
                                        <div className="getIn">
                                            <Link className={`${attachClasses2.join(" ")} ${toggleClass}`}
                                                activeClassName="active-nav-item" to="/contactus">
                                                <p>GET IN TOUCH</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className={`nav-item-icon ${toggleClass}`} onClick={this.addResponsiveClass}>
                                    <div className="iconMenu">
                                        <Menu />
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
                <SolutionItem enter={this.onMouseEnterHandlerSolution} leave={this.onMouseLeaveHandlerSolution} data={data} isHoverSolution={this.state.isHoverSolution} />
                <ServiceItem enter={this.onMouseEnterHandlerService} leave={this.onMouseLeaveHandlerService} data={data} isHoverService={this.state.isHoverService} />
                <IndustriesItem enter={this.onMouseEnterHandlerIndustries} leave={this.onMouseLeaveHandlerIndustries} data={data} isHoverIndustries={this.state.isHoverIndustries} />
                <ResourcesItem enter={this.onMouseEnterHandlerResources} leave={this.onMouseLeaveHandlerResources} data={data} isHoverResources={this.state.isHoverResources} />
                <ClientItem enter={this.onMouseEnterHandlerClient} leave={this.onMouseLeaveHandlerClient} data={data} isHoverClient={this.state.isHoverClient} />
                <CompanyItem enter={this.onMouseEnterHandlerCompany} leave={this.onMouseLeaveHandlerCompany} data={data} isHoverCompany={this.state.isHoverCompany} />
            </header>
        )
    }

}


export default Header