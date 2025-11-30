import React from 'react';

const MetricCard = ({ title, value, unit, trend }) => {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <div className="metric-value">
        {value} {unit}
      </div>
      {trend && <div className="metric-trend">{trend}</div>}
    </div>
  );
};

export default MetricCard;
