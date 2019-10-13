import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container, 
  Row, 
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSwedish, setIsSwedish] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  const language = () => setIsSwedish(!isSwedish)

  return (
    <div className="nav-container">

      <Navbar expand="md" className="nav-background-lg">
        <NavbarBrand className="nav-logo" href="/">COMPANY</NavbarBrand>
        
       

           {/* Mobile */}   
         
          <NavbarToggler onClick={toggle} className="ml-auto"/>
            <Collapse isOpen={isOpen} className="nav-collapse nav-mob" navbar>
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

            <div className="container nav-menu-center">
          
          {/* Desktop */}   

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
            <NavLink className="nav-menu-item-lg nav-menu-item-lang" href="#" onClick={language}><span>EN </span></NavLink>
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

    </div>
  );
}

export default Menu;