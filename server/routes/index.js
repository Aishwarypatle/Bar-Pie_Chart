// routes/index.js

const express = require('express');
const router = express.Router();
const DataController = require('../Controllers/DataController');
const StatisticsController = require('../Controllers/statisticsController');


// GET all users
router.get('/products', DataController.getAllProducts);

// GET statistics data for a selected month
router.get('/statistics', StatisticsController.getStatisticsData);

module.exports = router;
