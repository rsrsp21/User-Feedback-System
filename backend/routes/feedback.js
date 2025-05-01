const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// POST /feedback
router.post('/', async (req, res) => {
  try {
    // Validate the request body
    if (!req.body.userName || !req.body.email || !req.body.feedbackText || !req.body.category) {
      return res.status(400).send({ error: 'All fields (userName, email, feedbackText, category) are required.' });
    }

    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send(feedback);
  } catch (error) {
    console.error('Failed to save feedback:', error);
    res.status(400).send({ error: 'Failed to save feedback.' });
  }
});

// GET /feedback
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).send(feedback);
  } catch (error) {
    console.error('Failed to fetch feedbacks:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = router;