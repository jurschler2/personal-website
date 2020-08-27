import React from 'react';
import FullPage from "./FullPage"
import NavigationBar from "./NavigationBar"
import AOS from 'aos';

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App
 *  PARENT: index
 *  CHILDREN: NavigationBar, FullPage
 */


function App() {

  // Initialize the scroll animation
  AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-out-quart',
    delay: 100,
    startEvent: 'load'
  });

  return (
    <div className="App">
        <NavigationBar />
        <FullPage className="fullPage"/>
    </div>
  );
}

export default App;
