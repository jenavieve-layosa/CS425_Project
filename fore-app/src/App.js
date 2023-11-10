// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Lesson1 from './components/Lesson1';
import Lesson2 from './components/Lesson2';
import Lesson3 from './components/Lesson3';
import Lesson4 from './components/Lesson4';
import './styles.css';


const Home = () => {
  return (
    <div>
      <h1>Welcome to Robotics Coding Lessons</h1>
      <p>Learn how to code robotics with our step-by-step lessons. Get started by exploring the lessons below:</p>
      <div className="lesson-links">
        <Link to="/lesson1">Lesson 1</Link>
        <Link to="/lesson2">Lesson 2</Link>
        <Link to="/lesson3">Lesson 3</Link>
        <Link to="/lesson4">Lesson 4</Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lesson1">Lesson 1</Link></li>
            <li><Link to="/lesson2">Lesson 2</Link></li>
            <li><Link to="/lesson3">Lesson 3</Link></li>
            <li><Link to="/lesson4">Lesson 4</Link></li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={Home} />
        <Route path="/lesson1" component={Lesson1} />
        <Route path="/lesson2" component={Lesson2} />
        <Route path="/lesson3" component={Lesson3} />
        <Route path="/lesson4" component={Lesson4} />
      </div>
    </Router>
  );
};

export default App;
