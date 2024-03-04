// Navigation.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import HomePage from './views/pages/HomePage'; 
import Glossary from './views/pages/Glossary'; 

describe('Navigation', () => {
  it('should navigate to the home page', () => {
    const history = createMemoryHistory();
    history.push('/');

    render(
      <Router history={history}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Glossary" element={<Glossary />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText(/FORE: Fundamentals of Robotics Education is an interactive learning website for those of a high school to undergraduate level with an interest in learning how to program robotics!/i)).toBeInTheDocument(); 
  });

  it('should navigate to the glossary page', () => {
    const history = createMemoryHistory();
    history.push('/Glossary');

    render(
      <Router history={history}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Glossary" element={<Glossary />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText(/This is our hub of knowledge when it comes to robotics terms and lingo/i)).toBeInTheDocument(); 
  });
});
