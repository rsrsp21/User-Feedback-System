import React from 'react';
import { FiHome, FiMessageSquare} from 'react-icons/fi';

const Sidebar = ({ onFormClick, onDashboardClick, activeSection }) => {
  return (
    <div className="bg-gray-800 text-white p-4 h-screen">
      <div className="mb-8">
      <img src={`/image.png`} alt="logo" className="w-36 mb-4" />
        <h1 className="text-2xl font-bold">Feedback System</h1>
        <p className="text-gray-400">Your feedback matters!</p>
      </div>
      <div className="space-y-4">
        <button
          onClick={onFormClick}
          className={`flex items-center space-x-2 p-2 rounded w-full ${
            activeSection === 'form' ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
        >
          <FiMessageSquare className="text-2xl" />
          <span>Feedback Form</span>
        </button>
        <button
          onClick={onDashboardClick}
          className={`flex items-center space-x-2 p-2 rounded w-full ${
            activeSection === 'dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
        >
          <FiHome className="text-2xl" />
          <span>Dashboard</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;