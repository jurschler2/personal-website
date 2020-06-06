import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">JU</NavLink>
      <NavLink exact to="/about">About</NavLink>
      <NavLink exact to="/portfolio">Portfolio</NavLink>
      <NavLink exact to="/contact">Contact</NavLink>
    </nav>
  )
}

export default NavBar;