'use strict';

const {runner} = require('../runner');

const getArgs = () => {
  const [, , target, destinatio] = process.argv;
  return [target, destinatio];
};

const cli = () => {
  const [target, destinatio] = getArgs();
  runner(target || 'data/articles/statirjs.md', destinatio || 'data/articles/statirjs.json');
};

module.exports = {
  cli
};
