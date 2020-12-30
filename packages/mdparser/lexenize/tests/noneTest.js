'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const noneTest = createTest(
  ({curToken}) => {
    const result = curToken.match(/.*/);
    return result && !!result[0];
  },
  PRIORITIES.LOW,
  (tokens, {push}) => {
    return () => {
      push(tokens.curToken, LEXEMS_TYPES.NONE);
    };
  }
);

module.exports = {
  noneTest
};
