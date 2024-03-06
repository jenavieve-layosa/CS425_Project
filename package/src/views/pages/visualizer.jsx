import React, { useEffect, useState, useRef } from 'react';
import ThreeScene from './ThreeScene';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Simulation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [data, setData] = useState([]);
  const [autoplay, setAutoplay] = useState(false);
  const autoplayIntervalRef = useRef(null);

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
    <div>
      <h1>3D Simulation</h1>
      <Slider
        min={0}
        max={data.length - 1}
        step={1}
        value={currentFrame}
        onChange={handleSliderChange}
        disabled={autoplay}
      />
      <p>Current Frame: {currentFrame}</p>
      <button onClick={startAutoplay} disabled={autoplay}>
        Start Autoplay
      </button>
      <button onClick={stopAutoplay} disabled={!autoplay}>
        Stop Autoplay
      </button>
      <ThreeScene data={data[currentFrame]} />
    </div>
  );
};
// i am seconds away from losing my actual mind 


export default Simulation;