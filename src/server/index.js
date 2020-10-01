const express = require('express');
const getCountry = require('./getCountry');

const app = express();
const port = 3001;

app.use(express.static('build'));

app.get('/', (req, res) => {
  const ip = req.ip;
  res.status(200).send(`your ip is ${ip}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
