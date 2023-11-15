import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TabBar from './tabBar';

describe('TabBar', () => {
  it('renders tab buttons and create list button', () => {
    render(
      <Router>
        <TabBar openModal={() => {}} />
      </Router>
    );

    // Check if the List tab button is rendered
    expect(screen.getByText('List')).toBeInTheDocument();
      
    // Check if the Chart tab button is rendered  
    expect(screen.getByText('Chart')).toBeInTheDocument();

    // Check if the Create List button is rendered
    expect(screen.getByText('Create List')).toBeInTheDocument();
  });

  it('calls openModal when the Create List button is clicked', () => {
    const openModalMock = jest.fn();

    render(
      <Router>
        <TabBar openModal={openModalMock} />
      </Router>
    );

    // Click the Create List button
    fireEvent.click(screen.getByText('Create List'));

    // Check if openModalMock is called
    expect(openModalMock).toHaveBeenCalled();
  });

  // Add more test cases as needed for other functionalities of your TabBar component
});
