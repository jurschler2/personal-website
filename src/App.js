import React from 'react';
import './App.css';
import Routes from "./components/Routes"
import NavBar from "./components/NavBar"
import { BrowserRouter } from "react-router-dom";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App
 *  PARENT: index
 *  CHILDREN:
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
