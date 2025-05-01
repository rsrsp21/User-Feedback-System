import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';
import Sidebar from './components/Sidebar';

function App() {
  const [currentView, setCurrentView] = useState('form');

  const handleFormClick = () => setCurrentView('form');
  const handleDashboardClick = () => setCurrentView('dashboard');

  return (
    <div className="flex">
      <Sidebar
        onFormClick={handleFormClick}
        onDashboardClick={handleDashboardClick}
        activeSection={currentView} // Pass the current view as activeSection
      />
      <div className="flex-1 p-4">
        {currentView === 'form' ? <FeedbackForm /> : <FeedbackDashboard />}
      </div>
    </div>
  );
}

export default App;