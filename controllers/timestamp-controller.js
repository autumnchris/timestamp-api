const moment = require('moment');

exports.getRequestedDate = (req, res, next) => {
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
    res.send(`The date, "${date}", is invalid.`);
  }
}

exports.getCurrentDate = (req, res, next) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  });
}
