const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

app.get('/api/timestamp/:date', (req, res) => {
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

app.get('/api/timestamp', (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  });
});

app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, console.log(`Server is listening at port ${port}.`));
