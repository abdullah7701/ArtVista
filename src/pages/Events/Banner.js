import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "./downtown.png";
// import "./Apps.css";
import "./banner1.css";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Events", "Exibitions" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                  <span className="tagline">Welcome To Art Vista</span>
                  <h1>{`Upcoming`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Events", "Exibitions" ]'><span className="wrap">{text}</span></span></h1>
                    <p>Notify you for all upcoming Event's.</p>
                    <button onClick={() => console.log('connect')}>Let’s Join <ArrowRightCircle size={25} /></button>
              {/* <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Abdullah`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                    <p>INNOVATIVE, TASK-DRIVEN STUDENT WITH EXPERIENCE OF WEB DESIGN AND DEVELOPMENT. PRODUCTIVE IN DEVELOPING DATABASE, USER INTERFACES.IMPLEMENTING NEW FEATURES BASED ON USERFEEDBACK.</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
              </TrackVisibility> */}
            </Col>
            <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>
              {/* <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility> */}
            </Col>
          </Row>
        </Container>
      </section>
    )
  };
  
  export default Banner; 
