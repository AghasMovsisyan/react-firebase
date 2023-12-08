// Charts.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useIntl } from 'react-intl';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { ChartName, ChartStyles } from './ChartsStyled';

// Register the CategoryScale
Chart.register(CategoryScale);

export const Charts = ({ data }) => {
  const { formatMessage } = useIntl();

  const messages = {
    priceLabel: formatMessage({
      id: 'price.labelChart',
      defaultMessage: 'Price',
    }),
    yearLabel: formatMessage({ id: 'year.labelChart', defaultMessage: 'Year' }),
    ratingLabel: formatMessage({
      id: 'rating.labelChart',
      defaultMessage: 'Rating',
    }),
    chartTitle: formatMessage({ id: 'table.chars', defaultMessage: 'Chart' }),
  };

  const list = {
    labels: data.map((item) => item.mark),
    datasets: [
      {
        label: messages.priceLabel,
        data: data.map((item) => item.price),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: messages.yearLabel,
        data: data.map((item) => item.year),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: messages.ratingLabel,
        data: data.map((item) => item.rating),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <ChartName>{messages.chartTitle}</ChartName>
      <ChartStyles>
        <Line data={list} />
      </ChartStyles>
    </div>
  );
};

export default Charts;
