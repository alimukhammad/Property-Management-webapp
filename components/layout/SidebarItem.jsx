import React from 'react';

const SidebarItem = ({ label = '', icon = null, href = '#', isActive = false }) => {
  return (
    <div className={`sidebar-item ${isActive ? 'active' : ''}`}>
      {/* Sidebar item implementation */}
    </div>
  );
};

export default SidebarItem;
