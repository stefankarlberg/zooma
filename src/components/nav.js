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

      <Navbar expand="md" className="nav-background">
        <NavbarBrand className="nav-logo" href="/">COMPANY</NavbarBrand>
        
       

           {/* Mobile */}   
         
          <NavbarToggler onClick={toggle} className="ml-auto"/>
            <Collapse isOpen={isOpen} className="nav-collapse" navbar>
              <Nav className="ml-auto mr-auto d-md-none" navbar>
                <NavItem>
                  <NavLink className="nav-menu-item" href="http://www.zooma.se">Overview</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-menu-item" href="http://www.zooma.se">Testamonials</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-menu-item" href="http://www.zooma.se">Find us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>

            <div className="container nav-menu-center">
          
          {/* Desktop */}   

          <Row className="d-none d-lg-flex nav-menu-lg-full-width">
            <Col lg="3"></Col>
            <Col lg="6">
              <Nav className="ml-auto mr-auto d-md-none d-lg-flex" navbar>
                <NavItem>
                  <NavLink className="nav-menu-item" href="http://www.zooma.se">Overview</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-menu-item" href="http://www.zooma.se">Testamonials</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-menu-item" href="http://www.zooma.se">Find us</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg="3"></Col>
          </Row>
         
        </div>

      {/* Language / Contact*/}  
        
        <Nav className="d-none d-md-flex ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-menu-item nav-menu-item-lang" href="http://www.zooma.se">EN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-menu-item nav-menu-item-lang" href="#"> / </NavLink>
          </NavItem>
          <NavItem className="mr-4"> 
            <NavLink className="nav-menu-item nav-menu-item-lang" href="#" onClick={language}>SE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-menu-item nav-menu-item-contact" href="#">KONTAKT</NavLink>
          </NavItem>
        </Nav>

      </Navbar>

        {/* Tablet - new row */}   

      <Navbar expand="sm" className="d-none d-md-block d-lg-none nav-background">
      <div className="container">
            <Nav className="ml-auto mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-menu-item" href="http://www.zooma.se">Overview</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-menu-item" href="http://www.zooma.se">Testamonials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-menu-item" href="http://www.zooma.se">Find us</NavLink>
              </NavItem>
            </Nav>
      </div>
      </Navbar>

    </div>
  );
}

export default Menu;