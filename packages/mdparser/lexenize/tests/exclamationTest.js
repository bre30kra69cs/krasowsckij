'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const exclamationTest = createTest('!', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush('!', LEXEMS_TYPES.EXCLAMATION);
  };
});

module.exports = {
  exclamationTest
};
