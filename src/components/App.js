import React from 'react';
import './App.css';
import FullPage from "./FullPage"
import NavigationBar from "./NavigationBar"
import AOS from 'aos';
// import Routes from "./Routes"
// import { BrowserRouter } from "react-router-dom";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App
 *  PARENT: index
 *  CHILDREN: NavigationBar, FullPage
 */

// Initialize the scroll animation
AOS.init({
  offset: 200,
  duration: 500,
  easing: 'ease-out-quart',
  delay: 100,
  startEvent: 'load'
});

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <NavigationBar />
        <FullPage />
        {/* <Routes /> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
