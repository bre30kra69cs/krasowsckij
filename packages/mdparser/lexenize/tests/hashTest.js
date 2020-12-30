'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const hashTest = createTest('#', PRIORITIES.NORMAL, (tokens, {push}) => {
  return () => {
    push('#', LEXEMS_TYPES.HASH);
  };
});

const hashBreakTest = createTest(
  ({curToken, nextToken}) => {
    return curToken === '#' && nextToken !== '#';
  },
  PRIORITIES.HIGH,
  (tokens, {pushAndFlush}) => {
    return () => {
      pushAndFlush('#', LEXEMS_TYPES.HASH);
    };
  }
);

module.exports = {
  hashTest,
  hashBreakTest
};
