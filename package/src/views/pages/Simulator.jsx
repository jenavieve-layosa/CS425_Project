import React, { useEffect, useState, useRef } from "react";
import MonacoEditor from 'react-monaco-editor';
import PropTypes from "prop-types";
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
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

  const runFile = () => {
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
          <h2 className="subtitle text-center">This website uses Monaco Code Editor and a 3D visualization tool to create an interactive virtual environment for demonstrating robotics concepts without hardware.</h2>
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
            {/* Left half: Code Editor and its buttons */}
            <div style={{ width: '50%' }}>
              <div style={{ marginBottom: '10px' }}>
                <button onClick={saveFile}>Save File</button>
                <button onClick={runFile}>Run Simulation</button>
                <button onClick={() => changeTheme('hc-black')}>Dark Theme</button>
                <button onClick={() => changeTheme('vs-light')}>Light Theme</button>
              </div>
              <MonacoEditor
                width="100%"
                height="600"
                options={editorOptions}
                onChange={handleChange}
              />
            </div>

            {/* Right half: Visualizer, its buttons, and a slider */}
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <div style={{ marginTop: '20px' }}>
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
