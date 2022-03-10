const express = require('express');
const timestampController = require('../controllers/timestamp-controller');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/timestamp/:date', timestampController.getRequestedDate);

router.get('/timestamp', timestampController.getCurrentDate);

module.exports = router;
