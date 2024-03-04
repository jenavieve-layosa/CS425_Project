
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

test('navigates to home page', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );

  // Assert that the home page content is rendered
  expect(screen.getByText(/FORE: Fundamentals of Robotics Education is an interactive learning website for those of a high school to undergraduate level with an interest in learning how to program robotics!/i)).toBeInTheDocument();
});
