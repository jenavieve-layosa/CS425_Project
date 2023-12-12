import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const navigateToCodeEditor = () => {
    navigate('/code-editor'); // Navigate to CodeEditor route
  };

  return (
    <div>
      <h1>Welcome to the Robotics Education Website</h1>
      <p>Explore the world of robotics and ROS simulations.</p>
      <Link to="/simulation">
        <button>Start 3D Simulation</button>
      </Link>
      <button onClick={navigateToCodeEditor}>Go to Code Editor</button> {/* Add this button */}
    </div>
  );
};

export default Home;