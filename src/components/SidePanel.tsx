"use client";

import React, { useState } from 'react';

const SidePanel: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-gray-800 text-white h-100 transition-width duration-300`}>
      <button onClick={handleCollapse} className="p-2 focus:outline-none">
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <ul>
          <li>Orders</li>
          <li>Subscriptions</li>
          <li>Calendar</li>
          <li>Waitlist</li>
        </ul>
      )}
    </div>
  );
};

export default SidePanel;
