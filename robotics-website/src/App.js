// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarContainer, Title } from './components/NavbarElements';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup'; 
import Lessons from './pages/Lessons'; 
import Contact from './pages/contact';
import Lesson1 from './lessons/Lesson1';
import Lesson2 from './lessons/Lesson2';
import Lesson3 from './lessons/Lesson3';
import Lesson4 from './lessons/Lesson4';
import Glossary from './pages/Glossary';

function App() {
  return (
    <Router>
      <NavbarContainer>
        <Title>Fundamentals of Robotics Education</Title>
        <Navbar />
      </NavbarContainer>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/lessons' element={<Lessons />} />
          <Route path='/lessons/1' element={<Lesson1 />} />
          <Route path='/lessons/2' element={<Lesson2 />} />
          <Route path='/lessons/3' element={<Lesson3 />} />
          <Route path='/lessons/4' element={<Lesson4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export { NavbarContainer, Title }; 
export default App;

