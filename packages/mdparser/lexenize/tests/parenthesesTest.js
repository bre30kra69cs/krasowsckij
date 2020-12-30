'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const parenthesesLTest = createTest('(', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush('(', LEXEMS_TYPES.PARENTHESES_L);
  };
});

const parenthesesRTest = createTest(')', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush(')', LEXEMS_TYPES.PARENTHESES_R);
  };
});

module.exports = {
  parenthesesLTest,
  parenthesesRTest
};
