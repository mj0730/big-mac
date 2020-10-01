const axios = require('axios');

const config = {
  headers: { 'User-Agent': 'request' },
  responseType: 'text',
};

const getIp = async () => {
  const userIp = await axios.get('https://bot.whatismyipaddress.com', config).catch((error) => {
    throw new Error('There was an error getting the user IP', error);
  });

  return userIp.data;
};

module.exports = getIp;
