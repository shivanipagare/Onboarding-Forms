require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const investorRoutes = require('./routes/investorRoutes');
const startupRoutes = require('./routes/startupRoutes');

const app = express();
app.use(cors());
app.use(express.json());

console.log("Connecting to MongoDB...");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Booking',
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
// Routes
app.use('/api/investors', investorRoutes);
app.use('/api/startups', startupRoutes);

app.listen(process.env.PORT, () => console.log(` Server running on port ${process.env.PORT}`));
