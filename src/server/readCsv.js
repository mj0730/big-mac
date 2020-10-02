const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const FILES = fs.readdirSync(path.join(__dirname, 'csv'), (err, files) => {
  if (err) console.error(`ERROR: ${err}`);
  return files;
});

function writeToJson(data, fileName) {
  let file = fileName.split('.')[0];
  const writePath = path.resolve(__dirname, 'json', `${file}.json`);

  fs.writeFile(writePath, data, (err) => {
    if (err) console.error(err);
    else console.log(`Writing... ${file}.json`);
  });
}

function createJsonFiles(array) {
  for (let i = 0; i < array.length; i++) {
    let file = path.resolve(__dirname, 'csv', array[i]);
    const results = [];

    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(`Reading... ${file}`);
        writeToJson(JSON.stringify(results), array[i]);
      });
  }
}

createJsonFiles(FILES);
module.exports = {};
