const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/:date', (req, res, next) => {
  const date = req.params.date;

  if (!isNaN(date)) {
    res.json({
      unix: new Date(parseInt(date)).getTime(),
      utc: new Date(parseInt(date)).toUTCString()
    });
  }
  else if (moment.utc(date, 'YYYY-M-D', true).isValid()) {
    res.json({
      unix: new Date(date).getTime(),
      utc: new Date(date).toUTCString()
    });
  }
  else {
    res.json({
      error: 'Invalid Date'
    });
  }
});

router.get('/', (req, res, next) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  });
});

module.exports = router;
