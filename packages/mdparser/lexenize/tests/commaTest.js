'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const commaTest = createTest(',', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush(',', LEXEMS_TYPES.COMMA);
  };
});

module.exports = {
  commaTest
};
