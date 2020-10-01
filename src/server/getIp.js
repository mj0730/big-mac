const https = require('https');

const options = {
  host: 'bot.whatismyipaddress.com',
  path: '/',
  port: 443,
  method: 'GET',
  headers: { 'User-Agent': 'request' },
};

const getIp = () => {
  https
    .get(options, (res) => {
      let text = '';
      res.on('data', (chunk) => {
        text += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            console.log(text);
            return text;
          } catch (e) {
            console.log('ERROR');
          }
        } else {
          console.log('Status:', res.statusCode);
        }
      });
    })
    .on('error', (err) => {
      console.log('Error:', err);
    });
};

module.exports = getIp;
