const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  // Get all users
  const users = await User.find();
  res.json(users);
});

module.exports = router;