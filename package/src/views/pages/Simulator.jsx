import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import ThreeScene from './ThreeScene.js';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Simulator = () => {

  const navigate = useNavigate();

  const [currentFrame, setCurrentFrame] = useState(0);
  const [data, setData] = useState([]);
  const [autoplay, setAutoplay] = useState(false);
  const autoplayIntervalRef = useRef(null);

  const openCode = () => {
    // open current code page
    navigate('/CodeEditor');

  };
  const handleSliderChange = (newValue) => {
    setCurrentFrame(newValue);
    stopAutoplay();
  };


  const startAutoplay = () => {
    setAutoplay(true);
  
    const updateFrame = () => {
      setCurrentFrame((prevFrame) => {
        const nextFrame = (prevFrame + 1) % data.length;
  
        // Ensure we stop at the last frame and clear the timeout
        if (!data || nextFrame === 0) {
          stopAutoplay();
          return prevFrame;
        }
  
        let timeDiff = data[nextFrame].timestamp - data[prevFrame].timestamp;
        // Convert timeDiff to milliseconds if necessary or apply a default interval
        timeDiff = isNaN(timeDiff) ? 1 : timeDiff; // Default to 1 second if timeDiff isn't a number
        const delay = timeDiff * 1000; // Adjust this scaling factor as needed
  
        // Clear any existing timeout to ensure we don't speed up frame changes
        if (autoplayIntervalRef.current) {
          clearTimeout(autoplayIntervalRef.current);
        }
  
        autoplayIntervalRef.current = setTimeout(updateFrame, delay);
        return nextFrame;
      });
    };
  
    // Start the update loop
    updateFrame();
  };
  


  const stopAutoplay = () => {
    setAutoplay(false);
    if (autoplayIntervalRef.current) {
      clearTimeout(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };


  //TODO: grab .py from db and parse
  useEffect(() => {
    fetch('/data.txt')
      .then((response) => response.text())
      .then((text) => {
        const lines = text.split('\n');
        const parsedData = lines.map((line) => {
          const [timestamp, x, y, z, theta] = line.split(',');
          return { timestamp: parseFloat(timestamp), x, y, z, theta };
        });
        setData(parsedData);
      })
      .catch((error) => {
        console.error('Error fetching/reading data:', error);
      });
  }, []);


  useEffect(() => {
    if (autoplay) {
      startAutoplay();
    } else {
      stopAutoplay();
    }


    return () => {
      if (autoplayIntervalRef.current) {
        clearTimeout(autoplayIntervalRef.current);
      }
    };
  }, [autoplay, data.length]);

  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner />
          <h1 className="title text-center">Welcome to the Simulator</h1>
          <h2 className="subtitle text-center">This website uses a 3D visualization tool to create an interactive virtual environment for demonstrating robotics concepts without hardware.</h2>
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '20px' }}>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginTop: '20px' }}>
                  <button onClick={openCode}>Open Code Editor</button>
                  <button onClick={startAutoplay} disabled={autoplay}>Start Autoplay</button>
                  <button onClick={stopAutoplay} disabled={!autoplay}>Stop Autoplay</button>
                  <Slider
                    min={0}
                    max={data.length - 1}
                    step={1}
                    value={currentFrame}
                    onChange={handleSliderChange}
                    disabled={autoplay}
                    style={{ width: '100%', marginTop: '10px' }}
                  />
                  <p>Current Frame: {currentFrame}</p>
                </div>
              </div>
              <ThreeScene data={data[currentFrame]} />
                      
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Simulator.propTypes = {
  classes: PropTypes.object
};

export default Simulator;
