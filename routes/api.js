const express = require('express');
const timestampController = require('../controllers/timestamp-controller');
const router = express.Router();

router.get('/:date', timestampController.getRequestedDate);

router.get('/', timestampController.getCurrentDate);

module.exports = router;
