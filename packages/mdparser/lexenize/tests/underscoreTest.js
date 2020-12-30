'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const underscoreTest = createTest('_', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush('_', LEXEMS_TYPES.UNDERSCORE);
  };
});

module.exports = {
  underscoreTest
};
