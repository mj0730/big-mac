const https = require('https');
const userIp = require('./getIp');

const options = {
  host: 'ipvigilante.com',
  path: `/${userIp()}/full`,
  port: 443,
  method: 'GET',
  headers: { 'User-Agent': 'request' },
};

const getCountry = () => {
  https
    .get(options, function (res) {
      let json = '';
      res.on('data', function (chunk) {
        json += chunk;
      });
      res.on('end', function () {
        if (res.statusCode === 200) {
          try {
            const result = JSON.parse(json);
            console.log('-----------');
            console.log('Status: ', result.status);
            console.log('-----------');
            console.log('IPv4: ', result.data.ipv4);
            console.log('Hostname: ', result.data.hostname);
            console.log('Continent code: ', result.data.continent_code);
            console.log('Continent name: ', result.data.continent_name);
            console.log('Country ISO code: ', result.data.country_iso_code);
            console.log('Country name: ', result.data.country_name);
            console.log('Subdivision 1 ISO code: ', result.data.subdivision_1_iso_code);
            console.log('Subdivision 1 name: ', result.data.subdivision_1_name);
            console.log('Subdivision 2 ISO code: ', result.data.subdivision_2_iso_code);
            console.log('Subdivision 2 name: ', result.data.subdivision_2_name);
            console.log('City name: ', result.data.city_name);
            console.log('Metro code: ', result.data.metro_code);
            console.log('Time zone: ', result.data.time_zone);
            console.log('Postal code: ', result.data.postal_code);
            console.log('Latitude: ', result.data.latitude);
            console.log('Longitude: ', result.data.longitude);
            console.log('Accuracy radius: ', result.data.accuracy_radius);
            return result;
          } catch (e) {
            console.log('Error parsing JSON!');
          }
        } else {
          console.log('Status:', res.statusCode);
        }
      });
    })
    .on('error', function (err) {
      console.log('Error:', err);
    });
};

module.exports = getCountry;
