const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, process.argv[2]);


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    // TODO: Perform error handling for invalid file format and missing data
    for(let key in jsonData){
      if(!jsonData[key]){
        throw new Error('Missing field data');
        // console.log('Missing filed data');
        // process.exit(1);
      }
    }
    console.log('valid json file format')
  } catch (err) {
    console.error('Invalid JSON file format. Please provide a valid JSON file.');
  }
});
