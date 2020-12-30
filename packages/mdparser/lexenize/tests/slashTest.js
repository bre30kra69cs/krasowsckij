'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const slashTest = createTest('/', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush('/', LEXEMS_TYPES.SLASH);
  };
});

module.exports = {
  slashTest
};
