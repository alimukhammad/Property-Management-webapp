import React from 'react';

const DonutChart = ({ data = [], title = '', colors = [] }) => {
  return (
    <div className="donut-chart">
      <h3>{title || 'Donut Chart'}</h3>
      {/* Donut chart implementation */}
    </div>
  );
};

export default DonutChart;
