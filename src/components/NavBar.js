import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import "./NavBar.css";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => NavBar
 *  PARENT: App
 *  CHILDREN: None
 */

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar className="" light expand="sm">
      <NavLink exact to="/" className="personal-logo">
        >_ju
      </NavLink>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>


    // <>
    // <NavBar light expand="sm">
    //       <ul className="navbar-nav mr-auto">
    //           <li className="nav-link personal-logo">
    //           <NavLink exact to="/">>_ju</NavLink>
    //           </li>
    //         </ul>
    //         <NavbarToggler onClick={toggle} />
    //         <Collapse isOpen={isOpen} navbar={"navbar-nav ml-auto"}></Collapse>
    //           <ul class="navbar-nav ml-auto">
    //             <li className="nav-link">
    //             <NavLink exact to="/about">About</NavLink>
    //             </li>
    //             <li className="nav-link">
    //             <NavLink exact to="/portfolio">Portfolio</NavLink>
    //             </li>
    //             <li className="nav-link">
    //             <NavLink exact to="/contact">Contact</NavLink>
    //             </li>
    //           </ul>
    //   </NavBar>
    // </>  
  )
}

export default NavBar;