const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB Atlas connection string
const uri = "mongodb+srv://rsrsp21:nVxSMVQYWfQefOET@cluster0.hd1uz5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Failed to connect to MongoDB Atlas:', err);
});

app.use(bodyParser.json());
app.use(cors());
app.use('/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});