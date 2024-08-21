// generate-config.js
const fs = require('fs');
const dotenv = require('dotenv');

// Load the environment variables from the .env file
dotenv.config();

// Write the environment variables to a config.js file
const configData = `
const CONFIG = {
    OPENAI_API_KEY: '${process.env.OPENAI_API_KEY}',
};

export default CONFIG;
`;

fs.writeFileSync('src/config.js', configData);

console.log('config.js file has been generated!');
