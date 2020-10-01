const express = require('express');
const getCountry = require('./getCountry');

const app = express();
const port = 3001;

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.status(200);
});

app.get('/country', async (req, res) => {
  try {
    const country = await getCountry();
    res.status(200).json(country);
  } catch (error) {
    console.error('There was an error getting the user country', error);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
