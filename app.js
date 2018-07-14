const path = require('path');
const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:date', (req, res) => {
  const date = req.params.date;
  let unix;
  let natural;

  if (!isNaN(date)) {
    unix = Number(date);
    natural = moment.utc(unix * 1000).format('MMMM D, YYYY');
  }
  else {
    
    if (moment.utc(date, 'MMMM D, YYYY').isValid()) {
      natural = date;
      unix = Number(moment.utc(natural, 'MMMM D, YYYY').format('X'));
    }
    else {
      unix = null;
      natural = null;
    }
  }

  res.json({
    unix,
    natural
  });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'), 404);
});

app.listen(port, console.log(`Server is listening at port ${port}.`));
