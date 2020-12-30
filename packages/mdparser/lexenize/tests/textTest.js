'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const textTest = createTest(
  ({curToken}) => {
    const result = curToken.match(/[A-Za-zА-Яа-я]/);
    return result && !!result[0];
  },
  PRIORITIES.NORMAL,
  (tokens, {push}) => {
    return () => {
      push(tokens.curToken, LEXEMS_TYPES.TEXT);
    };
  }
);

const textBreakTest = createTest(
  ({curToken, nextToken}) => {
    const resultCur = curToken.match(/[A-Za-zА-Яа-я]/);
    const resultNext = nextToken && nextToken.match(/[A-Za-zА-Яа-я]/);
    return resultCur && !!resultCur[0] && !resultNext;
  },
  PRIORITIES.HIGH,
  (tokens, {pushAndFlush}) => {
    return () => {
      pushAndFlush(tokens.curToken, LEXEMS_TYPES.TEXT);
    };
  }
);

module.exports = {
  textTest,
  textBreakTest
};
