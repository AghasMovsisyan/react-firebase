/* global describe it expect */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl'; // Import IntlProvider from react-intl
import Charts from '../Charts';

describe('Charts Component', () => {
  const testData = [
    { mark: 'A', price: 100, year: 2020, rating: 4 },
    { mark: 'B', price: 150, year: 2021, rating: 3 },
    // Add more test data as needed
  ];

  it('renders chart title correctly', () => {
    render(
      <IntlProvider locale="en">
        <Charts data={testData} />
      </IntlProvider>,
    );

    // Check if the chart title is rendered
    expect(screen.getByText('Chart')).toBeInTheDocument(); // Update with your actual chart title
  });

  // Add more tests for specific behavior or rendering of the chart component
  // For instance, you could test if certain labels or data are present in the chart.
});
