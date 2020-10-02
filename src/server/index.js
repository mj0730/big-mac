const express = require('express');
const cors = require('cors');
const getCountry = require('./getCountry');
require('./readCsv');
const filterJson = require('./filterJson');

const app = express();
const port = 3001;

app.use(express.static('build'));

const recentYear = filterJson('2016-01-01');

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/country', cors(), async (req, res) => {
  try {
    const country = await getCountry();
    res.status(200).json(country);
  } catch (error) {
    console.error('There was an error getting the user country', error);
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
