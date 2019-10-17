import React, { useState, Component } from 'react';
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



 export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      prevScrollpos: window.pageYOffset,
      isOpen: false,
    };
  }

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
  {
    console.log('closed')
  }
  };


  render() {
    return (

     <>
      <div onClick={this.handleToggle} className= {`${this.state.isOpen ? "app-overlay" : ""}`} />
      <div className="nav-container " />
        <Navbar expand="md" className="nav-background-lg sticky-top md-">
          <NavbarBrand className="nav-logo" href="/">COMPANY</NavbarBrand>
        
            {/* Mobile */}   
            <NavbarToggler onClick={this.handleToggle} className={`${this.state.isOpen ? "navbar-toggler-icon_sk-close" : "navbar-toggler-icon_sk"}`} data-toggle="collapse" />
              <Collapse isOpen={this.state.isOpen} className="nav-collapse nav-mob active" navbar>
                <Nav className="ml-auto mr-auto d-md-none" navbar>
                  <NavItem className="nav-li-sm">
                    <NavLink className="nav-menu-item-sm" href="http://www.zooma.se">Overview</NavLink>
                  </NavItem>
                  <NavItem className="nav-li-sm">
                    <NavLink className="nav-menu-item-sm" href="http://www.zooma.se">Testamonials</NavLink>
                  </NavItem>
                  <NavItem className="nav-li-sm">
                    <NavLink className="nav-menu-item-sm" href="http://www.zooma.se">Find us</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>

              
          {/* Desktop */}   
          <div className="container-fluid-zooma nav-menu-center">
            <Row className="d-none d-lg-flex nav-menu-lg-full-width">
              <Col lg="3"></Col>
              <Col lg="6">
                <Nav className="ml-auto mr-auto d-md-none d-lg-flex" navbar>
                  <NavItem className="nav-li-lg">
                    <NavLink className="nav-menu-item-lg" href="http://www.zooma.se"><span>Overview</span></NavLink>
                  </NavItem>
                  <NavItem className="nav-li-lg">
                    <NavLink className="nav-menu-item-lg" href="http://www.zooma.se"><span>Testamonials</span></NavLink>
                  </NavItem>
                  <NavItem className="nav-li-lg">
                    <NavLink className="nav-menu-item-lg" href="http://www.zooma.se"><span>Find us</span></NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col lg="3"></Col>
            </Row>
          </div>

          {/* Language / Contact*/}  
          <Nav className="d-none d-md-flex ml-auto" navbar>
            <NavItem className="nav-li-lg">
              <NavLink className="nav-menu-item-lg nav-menu-item-lang" href="#" ><span>EN </span></NavLink>
            </NavItem>
            <NavItem className="nav-li-lg">
              <NavLink className="nav-menu-item-lg nav-menu-item-lang" href="http://www.zooma.se"><span>/</span></NavLink>
            </NavItem>
            <NavItem className="nav-li-lg">
              <NavLink className="nav-menu-item-lg nav-menu-item-lang" href="http://www.zooma.se"><span>SV</span></NavLink>
            </NavItem>
            <NavItem className="nav-li-lg-contact">>
              <NavLink className="nav-menu-item-contact" href="#">KONTAKT</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        {/* Tablet - new row */} 
        <Navbar expand="sm" className="d-none d-md-block d-lg-none nav-background-tablet">
          <div className="container">
            <Nav className="ml-auto mr-auto nav-ul-md" navbar>
              <NavItem className="nav-li-md">
                <NavLink className="nav-menu-item-md" href="http://www.zooma.se"><span>Overview</span></NavLink>
              </NavItem>
              <NavItem className="nav-li-md">
                <NavLink className="nav-menu-item-md" href="http://www.zooma.se"><span>Testamonials</span></NavLink>
              </NavItem>
              <NavItem className="nav-li-md">
                <NavLink className="nav-menu-item-md" href="http://www.zooma.se"><span>Find us</span></NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
       
      </>


    );
  }
}


