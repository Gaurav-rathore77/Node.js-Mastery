const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');

router.get('/admin', authenticate, authorize('admin'), (req, res) => {
    res.json({ message: 'Admin dashboard' });
  });

  module.exports = router;