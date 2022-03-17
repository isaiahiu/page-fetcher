const argv = process.argv.slice(2);
const request = require("request");
const fs = require("fs");

const website = argv[0];
const path = argv[1];

const readFunc = (error, response, body) => {
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log("Failed to write to file");
      return;
    }
    console.log(
      `Downloaded ${website} and saved ${body.length} bytes to ${path}`
    );
  });
};

request(website, readFunc);
