import React from 'react';

const SidebarItem = ({ title, icon, href, onClick }) => {
  return (
    <li className="sidebar-item">
      {icon && <span className="sidebar-icon">{icon}</span>}
      {href ? (
        <a href={href}>{title}</a>
      ) : (
        <button onClick={onClick}>{title}</button>
      )}
    </li>
  );
};

export default SidebarItem;
