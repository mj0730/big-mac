const jsonList = require('./json/currency.json');

const lookup = {};
jsonList.forEach((x) => (lookup[x.ENTITY.toLowerCase()] = x));

const findCurrency = (country) => {
  country = country.toLowerCase();
  if (lookup.country) return lookup.country;
  else return { Currency: '', 'Alphabetic Code': '' };
};

module.exports = findCurrency;
