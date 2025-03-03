const fs = require('fs');

const now = new Date();
const dateString = now.toISOString().split('T')[0]; // "YYYY-MM-DD"
const version = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;

// Generate index.js with the function
const code = `module.exports = function today() { return "${dateString}"; };`;

fs.writeFileSync('index.js', code);

// Update package.json version
const packageJson = JSON.parse(fs.readFileSync('package.json'));
packageJson.version = version;
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log(`Updated index.js and package version to: ${version}`);
