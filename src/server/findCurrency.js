const jsonList = require('./json/currency.json');

const findCurrency = (country) => {
  const lookup = {};
  jsonList.forEach((x) => (lookup[x.ENTITY.toLowerCase()] = x));

  country = country.toLowerCase();

  if (lookup[country]) return lookup[country];
  else return { Currency: '', 'Alphabetic Code': '' };
};

module.exports = findCurrency;
