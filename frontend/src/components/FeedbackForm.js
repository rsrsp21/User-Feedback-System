import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [category, setCategory] = useState('suggestion'); // Default category

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback', {
        userName,
        email,
        feedbackText,
        category
      });
      alert('Feedback submitted successfully!');
      setUserName('');
      setEmail('');
      setFeedbackText('');
      setCategory('suggestion'); // Reset to default category
    } catch (error) {
      console.error(error);
      alert('Failed to submit feedback.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Feedback Form</h2>
      <p className="text-gray-700 mb-6 text-center">We value your feedback!</p>
      <form onSubmit={handleSubmit} className="p-6 bg-gray-300 shadow-lg rounded-lg border border-gray-200">
        <div className="mb-5">
          <label className="block text-gray-800 text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            value={userName}
            placeholder='Enter your name'
            onChange={(e) => setUserName(e.target.value)}
            required
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-800 text-sm font-medium mb-2">Email:</label>
          <input
            type="email"
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-800 text-sm font-medium mb-2">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' fill=\'%23000000\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\' clip-rule=\'evenodd\'/%3E%3C/svg%3E")',
              backgroundPosition: 'right 0.75rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1rem',
              appearance: 'none',
            }}
          >
            <option value="suggestion">Suggestion</option>
            <option value="bug report">Bug Report</option>
            <option value="feature request">Feature Request</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-gray-800 text-sm font-medium mb-2">Feedback:</label>
          <textarea
            value={feedbackText}
            placeholder='Enter your feedback'
            onChange={(e) => setFeedbackText(e.target.value)}
            required
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;