import React, { useState, useEffect, useRef } from "react";
import image1 from "../Zodiac/image1.jpg";
import image2 from "../Zodiac/image2.jpeg";
import image3 from "../Zodiac/image3.jpg";
import image4 from "../Zodiac/SLIDE1.jpg";
import image5 from "../Zodiac/slide2.jpg";
import image6 from "../Zodiac/slide3.jpg";
import image7 from "../Zodiac/SLIDE4.jpg";
import './Zodiac.css';


const Zodiac = () => {
  const [isFirstImageInCenter, setIsFirstImageInCenter] = useState(false);
  const [isScrollPastLastImage, setIsScrollPastLastImage] = useState(false);
  const firstImageRef = useRef(null);
  const lastImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (firstImageRef.current) {
        const firstRect = firstImageRef.current.getBoundingClientRect();
        const isInCenter =
          firstRect.top >= 0 &&
          firstRect.bottom <= window.innerHeight &&
          firstRect.left >= 0 &&
          firstRect.right <= window.innerWidth;

        setIsFirstImageInCenter(isInCenter);
      }

      if (lastImageRef.current) {
        const lastRect = lastImageRef.current.getBoundingClientRect();
        const threshold = 0.5; // Adjust this value to control when fading starts (0 to 1)
        const isScrollingPastLastImage = lastRect.top <= window.innerHeight * threshold;
        setIsScrollPastLastImage(isScrollingPastLastImage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const purpleContainerHeight = isFirstImageInCenter ? "62vh" : 0;
  const purpleContainerStyle = {
    position: "fixed",
  top: "40px",
  left: 0,
  marginTop: "120px",
  width: "100%",
  height: purpleContainerHeight,
  background: "linear-gradient(90deg, rgb(102, 153, 204), rgb(140, 102, 153))",
  backgroundSize: "200% 150%",
  borderRadius: "25px",
  zIndex: -3,
  visibility: isFirstImageInCenter && !isScrollPastLastImage ? "visible" : "hidden",
  opacity: isFirstImageInCenter && !isScrollPastLastImage ? 1 : 0,
  transition: "opacity 0.5s ease-in-out, height 0.75s ease-in-out",
  animation: "waveBackground 6s ease-in-out infinite"
  };

  const textContainerStyle = {
    width: "50%",
    padding: "20px",
    position: "fixed",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    textAlign: "center",
    zIndex: 6,
    visibility: isFirstImageInCenter && !isScrollPastLastImage ? "visible" : "hidden",
    opacity: isFirstImageInCenter && !isScrollPastLastImage ? 1 : 0,
    transition: "opacity 1s ease-in-out, visibility 1s ease-in-out",
  };

  return (
    <div>
      <div style={purpleContainerStyle}></div>

      <div style={textContainerStyle}>
      <h1 style={{  
        fontFamily: "system-ui, sans-serif",
        fontWeight: "bold",  
        fontSize: "36px", 
        
      }}>
        Explore Your Zodiac !
      </h1>
    </div>

      <div
        style={{
          position: "sticky",
          top: 0,
          marginRight: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          ref={firstImageRef}
          src={image1}
          style={{
            width: "320px",
            height: "400px",
            borderRadius: "5px",
            boxShadow: "2px 8px 20px rgba(0, 0, 0, 0.8)",
            transition: "transform 0.5s",
            transform: isFirstImageInCenter
              ? "translate3d(0px, -2.9638%, 0px) rotate(-5.5543deg) scale(1.1035, 1.10354)"
              : "rotate(-10deg)",
          }}
          alt="Image 1"
        />
      </div>
      <div
        style={{
          position: "sticky",
          top: 0,
          marginRight: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          src={image2}
          style={{
            width: "340px",
            height: "420px",
            borderRadius: "5px",
            boxShadow: "2px 8px 20px rgba(0, 0, 0, 0.8)",
            transition: "transform 0.5s",
            transform: "rotate(10deg)",
          }}
          alt="Image 2"
        />
      </div>

      <div
        style={{
          position: "sticky",
          top: 0,
          marginRight: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          src={image4}
          style={{
            width: "340px",
            height: "420px",
            borderRadius: "5px",
            boxShadow: "2px 8px 20px rgba(0, 0, 0, 0.8)",
            transition: "transform 0.5s",
            transform: "rotate(0deg)",
          }}
          alt="Image 4"
        />
      </div>
      <div
        style={{
          position: "sticky",
          top: 0,
          marginRight: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          src={image5}
          style={{
            width: "340px",
            height: "420px",
            borderRadius: "5px",
            boxShadow: "2px 8px 20px rgba(0, 0, 0, 0.8)",
            transition: "transform 0.5s",
            transform: "rotate(-10deg)",
          }}
          alt="Image 5"
        />
      </div>
      <div
        style={{
          position: "sticky",
          top: 0,
          marginRight: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          src={image6}
          style={{
            width: "340px",
            height: "420px",
            borderRadius: "5px",
            boxShadow: "2px 8px 20px rgba(0, 0, 0, 0.8)",
            transition: "transform 0.5s",
            transform: "rotate(0deg)",
          }}
          alt="Image 6"
        />
      </div>
      <div
        style={{
          position: "sticky",
          top: 0,
          marginRight: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          src={image7}
          style={{
            width: "340px",
            height: "420px",
            borderRadius: "5px",
            boxShadow: "2px 8px 20px rgba(0, 0, 0, 0.8)",
            transition: "transform 0.5s",
            transform: "rotate(10deg)",
          }}
          alt="Image 7"
        />
      </div>
      <div
        style={{
          position: "sticky",
          top: 0,
          marginRight: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <img
          ref={lastImageRef}
          id="lastImage"
          src={image3}
          style={{
            width: "340px",
            height: "420px",
            borderRadius: "5px",
            boxShadow: "2px 8px 20px rgba(0, 0, 0, 0.8)",
            transition: "transform 0.5s",
            transform: "rotate(0deg)",
          }}
          alt="Image 3"
        />
      </div>
      
    </div>
  );
};

export default Zodiac;