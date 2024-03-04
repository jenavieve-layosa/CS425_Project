// Navigation.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import HomePage from './src/views/pages/HomePage';
import Glossary from './src/views/pages/Glossary';

describe('Navigation', () => {
  it('should navigate to the home page', async () => {
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

    // Debugging: Log the rendered component to check if it's correct
    console.log(screen.debug());

    // Wait for the component to be available before making assertions
    await waitFor(() => {
      expect(screen.getByText(/FORE: Fundamentals of Robotics Education/i)).toBeInTheDocument();
    });
  });

  it('should navigate to the glossary page', async () => {
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

    // Debugging: Log the rendered component to check if it's correct
    console.log(screen.debug());

    // Wait for the component to be available before making assertions
    await waitFor(() => {
      expect(screen.getByText(/This is our hub of knowledge when it comes to robotics terms and lingo/i)).toBeInTheDocument();
    });
  });
});
