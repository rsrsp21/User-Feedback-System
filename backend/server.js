const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/userfeedback', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(cors());
app.use('/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});