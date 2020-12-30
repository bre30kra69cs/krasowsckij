'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const colonTest = createTest(':', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush(':', LEXEMS_TYPES.COLON);
  };
});

module.exports = {
  colonTest
};
