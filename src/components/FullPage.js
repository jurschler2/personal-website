import React from 'react'
import Home from './Home.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';


function FullPage() {
  return (
    <div className='fullPage'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default FullPage;