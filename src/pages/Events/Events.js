// EventPage.jsx
import React, { useEffect, useState } from 'react';
// import './Events.css'; // Ensure this CSS file now also includes styles from Banner.css
import Banner from './Banner.js';
import Projects from './Projects.js'
import Contact from './Contact.js'

const EventPage = () => {


  return (
    
    <div className="gradient-bg">
      <Banner /> 
      <Projects />
       <Contact />
      <div className="text-container"></div>
      {/* <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive" style={interactiveStyle}></div>
      </div> */}
    </div>
  );
};

export default EventPage;
