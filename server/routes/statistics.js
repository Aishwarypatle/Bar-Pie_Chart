// routes/statistics.js

const express = require('express');
const router = express.Router();
const StatisticsController = require('../Controllers/statisticsController');

// GET statistics data for a selected month
router.get('/statistics', StatisticsController.getStatisticsData);

module.exports = router;
