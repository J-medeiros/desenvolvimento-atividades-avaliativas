import React from 'react';
import { Chart } from 'react-google-charts';

const BarChart = () => {
  const data = [
    ['Element', 'Density', { role: 'style' }],
    ['Copper', 8.94, '#b87333'], // RGB value
    ['Silver', 10.49, 'silver'], // CSS-style declaration
    ['Gold', 19.30, 'gold'],
    ['Platinum', 21.45, 'color: #e5e4e2'], // CSS-style declaration
  ];

  const options = {
    title: 'Density of Precious Metals, in g/cm³',
    width: 600,
    height: 400,
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <Chart
        chartType="BarChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default BarChart;