const express = require('express');
const Investor = require('../models/Investor');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const investor = new Investor(req.body);
    // console.log(req.body)
    await investor.save();
    res.json({ message: 'Investor data saved successfully!' });
  } catch (error) {
     console.log(error)
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
