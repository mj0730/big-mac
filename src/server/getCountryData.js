const getCountryData = (userCountry, countryList) => {
  const [usersCountry] = countryList.filter((x) => userCountry === x.Country);
  const removed = countryList.filter((x) => userCountry !== x.Country);
  const randomCountry = removed[Math.floor(Math.random() * removed.length)];

  return { user: usersCountry, random: randomCountry };
};

module.exports = getCountryData;
