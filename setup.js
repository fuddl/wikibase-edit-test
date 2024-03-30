const path = require('path');
const { exec } = require('child_process');

const command = `./node_modules/.bin/esbuild ./node_modules/wikibase-edit/lib/index.js --bundle --outfile=wikibase-edit.mjs --platform=browser --format=esm`;

exec(command, { cwd: __dirname }, (error, stdout, stderr) => {
  console.log(`Prepared wikibase-edit successfully.`);
});