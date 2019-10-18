import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, 
  Row, 
  Col,
 } from 'reactstrap';
 import { LanguageContext } from '../context/LanguageContext.js';


 export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      prevScrollpos: window.pageYOffset,
      isOpen: false,
    };
  }
  

  static contextType = LanguageContext

   // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }


  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleToggle  = () =>  {
    this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }));
  }

  handleScroll = () => {
    if (this.state.isOpen) {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const isOpen = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      isOpen
    });
    console.log('open')

  }

  };

  render() {
   
    const { content, isSwedish, setLanguage } = this.context;
    
    return (

     <>
 
      <div onClick={this.handleToggle} className= {`${this.state.isOpen ? "app-overlay" : ""}`} />
      <div className="nav-container " />
        <Navbar expand="md" className="nav-background-lg nav-sticky">
          <NavbarBrand className="nav-logo" href="/">COMPANY</NavbarBrand>
        
            {/* Mobile */}   
            <NavbarToggler onClick={this.handleToggle} className={`${this.state.isOpen ? "navbar-toggler-icon_sk-close" : "navbar-toggler-icon_sk"}`} data-toggle="collapse" />
              <Collapse isOpen={this.state.isOpen} className="nav-collapse nav-mob active" navbar>
                <Nav className="ml-auto mr-auto d-md-none" navbar>
                  <NavItem className="nav-li-sm">
                    <NavLink className="nav-menu-item-sm" href="http://www.zooma.se">{content.menu.one}</NavLink>
                  </NavItem>
                  <NavItem className="nav-li-sm">
                    <NavLink className="nav-menu-item-sm" href="http://www.zooma.se">{content.menu.two}</NavLink>
                  </NavItem>
                  <NavItem className="nav-li-sm">
                    <NavLink className="nav-menu-item-sm" href="http://www.zooma.se">{content.menu.three}</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>

              
          {/* Desktop */}   
          <div className="container-fluid-zooma nav-menu-center">
            <Row className="d-none d-md-flex nav-menu-md-full-width">
              <Col lg="3"></Col>
              <Col lg="6">
                <Nav className="ml-auto mr-auto d-md-flex" navbar>
                  <NavItem className="nav-li-lg">
                    <NavLink className="nav-menu-item-lg" href="http://www.zooma.se"><span>{content.menu.one}</span></NavLink>
                  </NavItem>
                  <NavItem className="nav-li-lg">
                    <NavLink className="nav-menu-item-lg" href="http://www.zooma.se"><span>{content.menu.two}</span></NavLink>
                  </NavItem>
                  <NavItem className="nav-li-lg">
                    <NavLink className="nav-menu-item-lg" href="http://www.zooma.se"><span>{content.menu.three}</span></NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col lg="3"></Col>
            </Row>
          </div>

          {/* Language / Contact*/}  
          <Nav className="d-none d-md-flex ml-auto nav-lang-z-index nav-lang-ul" navbar>
            <NavItem className="nav-li-lang">
              <NavLink className={`${isSwedish ? "nav-lang-inactive" : "nav-lang-active"}`} href="#" onClick={setLanguage("english")}><span>EN</span></NavLink>
            </NavItem>
            <NavItem className="nav-li-lang">
              <NavLink className=""><span>/</span></NavLink>
            </NavItem>
            <NavItem className="nav-li-lang">
              <NavLink className={`${isSwedish ? "nav-lang-active" : "nav-lang-inactive"}`} onClick={setLanguage("swedish")} href="#"><span>SV</span></NavLink>
            </NavItem>
            <NavItem className="nav-li-lg-contact">>
              <NavLink className="nav-menu-item-contact" href="#">{content.menu.four}</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="nav-background-tablet-zooma"></div>

       
      </>


    );
  }
}


