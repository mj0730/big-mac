const express = require('express');
const cors = require('cors');
const getCountry = require('./getCountry');
require('./readCsv');
const filterJson = require('./filterJson');
const getCountryData = require('./getCountryData');
const findCurrency = require('./findCurrency');

const app = express();
const port = 3001;

app.use(express.static('build'));

const data = require('./json/big-mac-index.json') || [];
const recentYear = filterJson(data, '2016-01-01');

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/country', cors(), async (req, res) => {
  try {
    const userCountry = await getCountry();
    const data = getCountryData(userCountry.data['country_name'], recentYear);
    const { user, random } = data;

    const currency = { user: findCurrency(user.Country), random: findCurrency(random.Country) };
    data.currency = currency;

    res.status(200).json(data);
  } catch (error) {
    console.error('There was an error getting the country api', error);
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
