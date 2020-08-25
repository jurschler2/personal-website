import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes
 *  PARENT: App
 *  CHILDREN: Home, About, Portfolio, Contact
 */

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>  
        <Redirect to="/"/>
      </Switch>
    </div>
  )
}

export default Routes;