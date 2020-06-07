import React from "react";
import { NavLink } from "react-router-dom";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => NavBar
 *  PARENT: App
 *  CHILDREN: None
 */

function NavBar() {
  return (
    <span>
      <nav>
        <NavLink exact to="/">JU</NavLink>
      </nav>
      <nav>  
        <NavLink exact to="/about">About</NavLink>
        <NavLink exact to="/portfolio">Portfolio</NavLink>
        <NavLink exact to="/contact">Contact</NavLink>
      </nav>
    </span>
  )
}

export default NavBar;