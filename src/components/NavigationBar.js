import React, {useState} from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import * as Scroll from 'react-scroll';
import "./NavBar.css";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => NavBar
 *  PARENT: App
 *  CHILDREN: None
 */

let Link = Scroll.Link;
const SMOOTH = 'easeInOutCubic';
const DURATION = 1500;
const DELAY = 0;
const LOGO_WORD = '>_ju'

function NavigationBar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sticky-top navBar navigationBar">
      <Navbar className="navigationBar" light expand="sm">
        <Container>
          <Link 
            to="/" 
            className="personal-logo"
            delay={DELAY}
            smooth={SMOOTH}
            duration={DURATION}
            isDynamic={true}
            >
            {LOGO_WORD}
          </Link>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                          className="nav-link"
                          delay={DELAY}
                          smooth={SMOOTH}
                          duration={DURATION}
                          to="/about"
                          isDynamic={true}
                          >
                          About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                          className="nav-link"
                          delay={DELAY}
                          smooth={SMOOTH}
                          duration={DURATION}
                          to="/portfolio"
                          isDynamic={true}
                          >
                          Portfolio
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                          className="nav-link"
                          delay={DELAY}
                          smooth={SMOOTH}
                          duration={DURATION}
                          to="/contact"
                          isDynamic={true}
                          >
                          Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div> 
  )
}

export default NavigationBar;