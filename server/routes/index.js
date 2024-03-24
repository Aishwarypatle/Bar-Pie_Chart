// routes/index.js

const express = require('express');
const router = express.Router();
const DataController = require('../Controllers/DataController');

// GET all users
router.get('/products', DataController.getAllProducts);

module.exports = router;
