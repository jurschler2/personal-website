import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => NavBar
 *  PARENT: App
 *  CHILDREN: None
 */

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light">
      <ul className="navbar-nav mr-auto">
          <li className="nav-link personal-logo">
          <NavLink exact to="/">>_ju</NavLink>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li className="nav-link">
          <NavLink exact to="/about">About</NavLink>
          </li>
          <li className="nav-link">
          <NavLink exact to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-link">
          <NavLink exact to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>  
  )
}

export default NavBar;