const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  investmentRange: String,
  sectorInterest: [String],
});

module.exports = mongoose.model('Investor', investorSchema);
