"use client";

import React, { useState } from 'react';

const SidePanel: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-gray-800 text-white h-screen fixed transition-width duration-300`}>
      <button onClick={handleCollapse} className="p-2 focus:outline-none">
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <ul>
          <li className="p-2 hover:bg-gray-700">Orders</li>
          <li className="p-2 hover:bg-gray-700">Subscriptions</li>
          <li className="p-2 hover:bg-gray-700">Calendar</li>
          <li className="p-2 hover:bg-gray-700">Waitlist</li>
        </ul>
      )}
    </div>
  );
};

export default SidePanel;
