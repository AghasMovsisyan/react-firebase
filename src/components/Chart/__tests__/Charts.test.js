/* global describe it expect */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl'; // Import IntlProvider from react-intl
import { Charts } from '../Charts';

describe('Charts Component', () => {
  const testData = [
    {
      mark: 'A',
      price: 100,
      year: 2020,
      rating: 4,
    },
    {
      mark: 'B',
      price: 150,
      year: 2021,
      rating: 3,
    },
    // Add more test data as needed
  ];

  it('renders chart title correctly', () => {
    render(
      <IntlProvider locale="en">
        <Charts data={testData} />
      </IntlProvider>,
    );

    expect(screen.getByText('Chart')).toBeInTheDocument();
  });
});
