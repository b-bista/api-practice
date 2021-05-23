const express = require('express');
const router = express.Router();


// Load each controller
const usersController = require('./users.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/users', usersController);


module.exports = router;