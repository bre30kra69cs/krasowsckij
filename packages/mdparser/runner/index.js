'use strict';

const fs = require('fs');
const path = require('path');
const {tokenize} = require('../tokenize');
const {lexenize} = require('../lexenize');
const {debug} = require('../debug');

const read = (targetPath) => {
  return fs.readFileSync(targetPath, {encoding: 'utf-8'});
};

const write = (destinationPath, content) => {
  const data = JSON.stringify(content);
  fs.writeFileSync(destinationPath, data);
};

const runner = (target, destination) => {
  const targetPath = path.join(process.cwd(), target);
  const destinationPath = path.join(process.cwd(), destination);
  const md = read(targetPath);
  const tokens = tokenize(md);
  const lexems = lexenize(tokens);
  write(destinationPath, lexems);
  debug(lexems);
};

module.exports = {
  runner
};
