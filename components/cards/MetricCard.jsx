import React from 'react';

const MetricCard = ({ title = '', value = '', unit = '', trend = null }) => {
  return (
    <div className="metric-card">
      <h3>{title || 'Metric Card'}</h3>
      {/* Metric card implementation */}
    </div>
  );
};

export default MetricCard;
