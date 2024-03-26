import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Bubble from "./Bubble";
import projImg1 from "./SLIDE1.jpg";
import projImg2 from "./slide2.jpg";
import colorSharp2 from "./color-sharp2.png";
import "./Project.css"; 
// import "./Apps.css";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const Projects = () => {

  
  // const mouseX = useMotionValue(-50);
  // const mouseY = useMotionValue(-50);

  // // Transforming these values for use in a style
  // const rotateX = useTransform(mouseY, [-50, 50], [-30, 30]);
  // const rotateY = useTransform(mouseX, [-50, 50], [30, -30]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [-40, 20]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-40, 20]);
  const bubbleCount = 50;
  const projects = [
    {
      title: "IR Art work's",
      description: "ALL Type of Work",
      imgUrl: projImg1,
    },
    {
      title: "NCA Art Event",
      description: "ALL Type of Work",
      imgUrl: projImg2,
    },
    {
      title: "Expo Event's ",
      description: "ALL Type of Work",
      imgUrl: projImg2,
    },
    {
      title: "Fine Art's by Nishat",
      description: "ALL Type of Work",
      imgUrl: projImg1,
    },
    {
      title: "RAASTA Event",
      description: "ALL Type of Work",
      imgUrl: projImg2,
    },
    {
      title: "MAD offical Work",
      description: "ALL Type of Work",
      imgUrl: projImg2,
    },
  ];

  
  return (
    <div className="project-container" onMouseMove={(e) => {
      // Update motion values based on mouse position within the container
      mouseX.set(e.clientX - e.currentTarget.offsetLeft);
      mouseY.set(e.clientY - e.currentTarget.offsetTop);
    }}>
      <motion.div 
        className="dynamic-background" 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          zIndex: '-1',
          rotateX: rotateX, 
          rotateY: rotateY, 
          transformStyle: 'preserve-3d' // Apply 3D rotation effect
        }}
      >
        {Array.from({ length: bubbleCount }).map((_, index) => (
          <Bubble key={index} />
        ))}
      </motion.div>
    
    {/* <div className="project-container"> */}

      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <h2>Event & Exhibitions</h2>
              <p>Join and Cut to the chase</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Islamabad</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Karachi</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Lahore</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
                    {/* Placeholder content */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Subscribe and get latest updates</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
         
        <img className="background-image-right" src={colorSharp2} alt="Background Image" />
      </section>
    </div>
  );
};

export default Projects;