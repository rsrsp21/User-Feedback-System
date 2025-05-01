const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  feedbackText: { type: String, required: true },
  category: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);