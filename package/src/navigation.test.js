import React from 'react';
import { render, screen } from '@testing-library/react';
import Simulator from './views/pages/Simulator';

describe('Simulator Page', () => {
  it('renders without crashing', () => {
    render(<Simulator />);
    // Check if certain elements are present on the page to ensure it rendered correctly
    expect(screen.getByText(/Welcome to the Simulator/i)).toBeInTheDocument();
    // expect(screen.getByText(/This website uses Monaco Code Editor and Gazebo/i)).toBeInTheDocument();
    // Add more assertions as needed
  });
});
