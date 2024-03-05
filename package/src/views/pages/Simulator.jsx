import React, { useEffect, useState, useRef } from "react";
import MonacoEditor from 'react-monaco-editor';
import PropTypes from "prop-types";
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img3 from '../../assets/images/img3.jpg';
import ThreeScene from './ThreeScene.js';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Simulator = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [data, setData] = useState([]);
  const [autoplay, setAutoplay] = useState(false);
  const autoplayIntervalRef = useRef(null);

  const [fileContent, setFileContent] = useState('');
  const [editorTheme, setEditorTheme] = useState('hc-black'); // State to manage editor theme

  const editorOptions = {
    theme: editorTheme,
    fontSize: 16,
    language: 'python',
    lineNumbers: 'on',
    minimap: {
      enabled: false,
    },
    wordWrap: 'on', // Enable word wrap
    // Set text alignment explicitly
    editorOptions: {
      wordWrap: 'on',
      minimap: { enabled: false },
      automaticLayout: true,
      glyphMargin: false,
      wrappingIndent: "indent",
      cursorStyle: 'line', // Display cursor as a line
      cursorBlinking: 'smooth', // Smooth cursor blinking
      scrollbar: { verticalScrollbarSize: 10, horizontalScrollbarSize: 10 }, // Set scrollbar size
    }
  };

  const handleChange = (value, event) => {
    setFileContent(value);
  };

  const saveFile = () => {
    // save file here, for now just going to download it
    const blob = new Blob([fileContent], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'myCodeFile.txt';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Function to handle theme change
  const changeTheme = (theme) => {
    setEditorTheme(theme);
  };

  const handleSliderChange = (newValue) => {
    setCurrentFrame(newValue);
    stopAutoplay();
  };

  const startAutoplay = () => {
    setAutoplay(true);
    const updateFrame = () => {
      setCurrentFrame((prevFrame) => {
        if (!data || data.length <= prevFrame + 1) {
          stopAutoplay(); // Stop the autoplay if data is not valid
          return prevFrame;
        }

        const nextFrame = (prevFrame + 1) % data.length;
        let timeDiff = data[nextFrame].timestamp - data[prevFrame].timestamp;
        timeDiff = isNaN(timeDiff) ? 0 : timeDiff; // Fallback if timeDiff is not a number

        autoplayIntervalRef.current = setTimeout(updateFrame, timeDiff * 1000); // Assuming timestamp is in seconds
        return nextFrame;
      });
    };

    updateFrame();
  };

  const stopAutoplay = () => {
    setAutoplay(false);
    if (autoplayIntervalRef.current) {
      clearTimeout(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

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
          <h1 className="title text-center"> Welcome to the Simulator</h1>
          <h2 className="subtitle text-center">This website uses Monaco Code Editor and Gazebo to create an interactive virtual environment to help demonstrate robotics concepts without the need for hardware</h2>
          <div style={{ width: '50%', textAlign: 'left' }}>
            <button onClick={saveFile} style={{ marginBottom: '10px' }}>Save File</button>
            <button onClick={() => changeTheme('hc-black')}>Dark Theme</button>
            <button onClick={() => changeTheme('vs-light')}>Light Theme</button>
            {/* Add more theme buttons as needed */}
          </div>
          <div className="intro-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', marginBottom: '20px' }}>
              <div style={{ display: 'flex', width: '40%' }}>
                <MonacoEditor
                  width="100%"
                  height="600"
                  options={editorOptions}
                  onChange={handleChange}
                />
              </div>
              
              <div style={{ width: '50%', textAlign: 'left' }}>
                <p>Current Frame: {currentFrame}</p>
                <button onClick={startAutoplay} disabled={autoplay}>
                  Start Autoplay
                </button>
                <button onClick={stopAutoplay} disabled={!autoplay}>
                  Stop Autoplay
                </button>
                <div style={{display: 'flex',  width: '50%', textAlign: 'left' }}>
                <ThreeScene data={data[currentFrame]} />
                </div>
                <Slider
                  min={0}
                  max={data.length - 1}
                  step={1}
                  value={currentFrame}
                  onChange={handleSliderChange}
                  disabled={autoplay}
                />
                
              </div>
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
