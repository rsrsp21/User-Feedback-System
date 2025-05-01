import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const [filters, setFilters] = useState({
    userName: '',
    email: '',
    category: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/feedback');
        setFeedbacks(response.data);
        setFilteredFeedbacks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  useEffect(() => {
    const filtered = feedbacks.filter((feedback) => {
      const feedbackDate = new Date(feedback.timestamp);
      const startDate = filters.startDate ? new Date(filters.startDate) : new Date(0);
      const endDate = filters.endDate ? new Date(filters.endDate) : new Date();

      // Ensure the end date is inclusive
      endDate.setHours(endDate.getHours() + 23, 59, 59, 999);

      return (
        (filters.userName === '' || feedback.userName.includes(filters.userName)) &&
        (filters.email === '' || feedback.email.includes(filters.email)) &&
        (filters.category === '' || feedback.category === filters.category) &&
        (feedbackDate >= startDate) &&
        (feedbackDate <= endDate)
      );
    });
    setFilteredFeedbacks(filtered);
  }, [filters, feedbacks]);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">Feedback Dashboard</h2>
      <p className="text-gray-700 mb-6 text-center">Manage and view user feedback!</p>
      <div className="p-6 bg-gray-300 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            name="userName"
            value={filters.userName}
            onChange={handleFilterChange}
            placeholder="Filter by User Name"
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            name="email"
            value={filters.email}
            onChange={handleFilterChange}
            placeholder="Filter by Email"
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="">All Categories</option>
            <option value="suggestion">Suggestion</option>
            <option value="bug report">Bug Report</option>
            <option value="feature request">Feature Request</option>
          </select>
          <div className="flex items-center gap-2">
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="text-gray-500">to</span>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              max={today}
              className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-50 shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left font-medium">Name</th>
                <th className="p-4 text-left font-medium">Email</th>
                <th className="p-4 text-left font-medium">Feedback</th>
                <th className="p-4 text-left font-medium">Date</th>
                <th className="p-4 text-left font-medium">Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedbacks.map((feedback, index) => (
                <tr
                  key={feedback._id}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  } hover:bg-gray-200`}
                >
                  <td className="p-4">{feedback.userName}</td>
                  <td className="p-4">{feedback.email}</td>
                  <td className="p-4">{feedback.feedbackText}</td>
                  <td className="p-4">{new Date(feedback.timestamp).toLocaleDateString()}</td>
                  <td className="p-4">{feedback.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDashboard;