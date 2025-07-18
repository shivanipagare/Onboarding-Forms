const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
  name: String,
  email: String,
  industry: String,
  fundingRequired: String,
  stage: String,
});

module.exports = mongoose.model('Startup', startupSchema);
