const express = require('express');
const router = express.Router();

router.use('/api/users', require('./users/users-routes'));

module.exports = router;