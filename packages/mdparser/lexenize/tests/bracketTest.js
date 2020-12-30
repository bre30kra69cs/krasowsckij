'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const bracketLTest = createTest('[', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush('[', LEXEMS_TYPES.BRACKET_L);
  };
});

const bracketRTest = createTest(']', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush(']', LEXEMS_TYPES.BRACKET_R);
  };
});

module.exports = {
  bracketLTest,
  bracketRTest
};
