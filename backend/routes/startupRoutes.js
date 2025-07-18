const express = require('express');
const Startup = require('../models/Startup');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const startup = new Startup(req.body);
    // console.log(req.body)
    await startup.save();
    res.json({ message: 'Startup data saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
