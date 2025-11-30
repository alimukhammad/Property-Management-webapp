import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>{children}</ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
