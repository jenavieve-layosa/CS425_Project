// src/components/Lessons.js
import React from 'react';
import { Link, Route } from 'react-router-dom'; // Add this line
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';

const Lessons = () => {
  return (
    <div>
      <h2>Lessons</h2>
      <ul>
        <li><Link to="/lessons/1">Lesson 1</Link></li>
        <li><Link to="/lessons/2">Lesson 2</Link></li>
        <li><Link to="/lessons/3">Lesson 3</Link></li>
        <li><Link to="/lessons/4">Lesson 4</Link></li>
      </ul>

      {/* Add Routes for Individual Lessons */}
      <Route path="/lessons/1" component={Lesson1} />
      <Route path="/lessons/2" component={Lesson2} />
      <Route path="/lessons/3" component={Lesson3} />
      <Route path="/lessons/4" component={Lesson4} />
    </div>
  );
};

export default Lessons;
