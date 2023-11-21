//chart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

// Register the CategoryScale
Chart.register(CategoryScale);

export const Charts = ({ data }) =>  {
  const list = {
    labels: data.map((item) => item.mark),
    datasets: [
      {
        label: "Price",
        data: data.map((item) => item.price),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Year",
        data: data.map((item) => item.year),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "Rating",
        data: data.map((item) => item.rating),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartStyles = {
    width: '1600px',
    height: '800px',
  };

  return (
    <div>
      <h2>Chart</h2>
      <div style={chartStyles}>
        <Line data={list} />
      </div>
    </div>
  );
}

export default Charts;
