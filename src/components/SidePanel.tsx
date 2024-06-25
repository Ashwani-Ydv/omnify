"use client";

import React, { useState } from 'react';
import collapse from '../assets/collapse.png';
import inbox from '../assets/inbox.png';
import rectangle from '../assets/rectangle.png';
import hourglass from '../assets/hourglass.png';
import globe from '../assets/globe.png';
import calendar from '../assets/calendar.png';
import subscription from '../assets/subscription.png'
const SidePanel: React.FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-gray-100 text-gray-800 font-medium h-screen fixed transition-width duration-300`}>
      <button onClick={handleCollapse} className="p-2 focus:outline-none">
        {isCollapsed ? (<img className='h-6 w-6' src={collapse.src} alt ="expand" />) :(<div className='flex'><img src={collapse.src} />&nbsp;<h1>Front-desk</h1><img className='ml-8 h-6 w-6' src={collapse.src} alt ="expand" /></div>)}
      </button>
      {!isCollapsed?(
        <ul>
          <li className="flex p-2 black"> <img className='h-6 w-6' src={globe.src} alt="order" />&nbsp; Location Name</li>
          <li className="flex p-2"> <img className='h-6 w-6' src={inbox.src} alt="order" />&nbsp; Orders</li>
          <li className="flex p-2"> <img className='h-6 w-6' src={subscription.src} alt="order" />&nbsp; Subscriptions</li>
          <li className="flex p-2"><img className='h-6 w-6' src={calendar.src} alt="order" />&nbsp; Calendar</li>
          <li className="flex p-2"><img className='h-6 w-6' src={hourglass.src} alt="order" />&nbsp; Waitlist</li>
        </ul>
      ):(
        <ul>
        <li className="p-2"> <img className='h-6 w-6' src={globe.src} alt="order" /></li>
        <li className="p-2 "><img className='h-6 w-6' src={inbox.src} alt="order" /></li>
        <li className="p-2 "><img className='h-6 w-6' src={subscription.src} alt="order" /></li>
        <li className="p-2"><img className='h-6 w-6' src={calendar.src} alt="order" /></li>
        <li className="p-2"><img className='h-6 w-6' src={hourglass.src} alt="order" /></li>
      </ul>
      )
    }
    </div>
  );
};

export default SidePanel;
