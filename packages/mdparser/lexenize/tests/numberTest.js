'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const numberTest = createTest(
  ({curToken}) => {
    const result = curToken.match(/[0-9]/);
    return result && !!result[0];
  },
  PRIORITIES.NORMAL,
  (tokens, {push}) => {
    return () => {
      push(tokens.curToken, LEXEMS_TYPES.NUMBER);
    };
  }
);

const numberBreakTest = createTest(
  ({curToken, nextToken}) => {
    const resultCur = curToken.match(/[0-9]/);
    const resultNext = nextToken && nextToken.match(/[0-9]/);
    return resultCur && !!resultCur[0] && !resultNext;
  },
  PRIORITIES.HIGH,
  (tokens, {pushAndFlush}) => {
    return () => {
      pushAndFlush(tokens.curToken, LEXEMS_TYPES.NUMBER);
    };
  }
);

module.exports = {
  numberTest,
  numberBreakTest
};
