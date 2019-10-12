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

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

      <Navbar color="dark" dark expand="md" h-64>
        <NavbarBrand href="/">COMPANY</NavbarBrand>
        
       

           {/* Mobile */}   
         
          <NavbarToggler onClick={toggle} className="ml-auto"/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto mr-auto d-md-none" navbar>
                <NavItem>
                  <NavLink href="http://www.zooma.se">Overview</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="http://www.zooma.se">Testamonials</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="http://www.zooma.se">Find us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>

            <div className="container nav-menu-center">
          
          {/* Desktop */}   

          <Row className="d-none d-lg-flex nav-menu-lg-full-width">
            <Col lg="4">.col-3</Col>
            <Col lg="4">
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
            <Col lg="4">.col-3</Col>
          </Row>
         
        </div>

      {/* Language / Contact*/}  
        
        <Nav className="d-none d-md-flex ml-auto" navbar>
          <NavItem>
            <NavLink href="http://www.zooma.se">EN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> / </NavLink>
          </NavItem>
          <NavItem className="mr-4"> 
            <NavLink className="nav-link-contact" href="http://www.zooma.se">SE</NavLink>
          </NavItem>
          <NavItem className="bg-warning text-dark">
            <NavLink href="http://www.zooma.se">CONTACT</NavLink>
          </NavItem>
        </Nav>

      </Navbar>

        {/* Tablet - new row */}   

      <Navbar color="dark" dark expand="sm" className="d-none d-md-block d-lg-none">
      <div className="container">
            <Nav className="ml-auto mr-auto" navbar>
              <NavItem>
                <NavLink href="http://www.zooma.se">Overview</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://www.zooma.se">Testamonials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://www.zooma.se">Find us</NavLink>
              </NavItem>
            </Nav>
      </div>
      </Navbar>

    </div>
  );
}

export default Menu;