'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const tireTest = createTest('-', PRIORITIES.NORMAL, (tokens, {setValue}) => {
  return () => {
    setValue('-');
  };
});

const lineTest = createTest(
  ({curToken, nextToken}) => {
    return curToken === '-' && nextToken !== '-';
  },

  PRIORITIES.HIGH,
  ({nextToken}, {getValue, pushAndFlush}) => {
    return () => {
      if (getValue().length === 2) {
        pushAndFlush('-', LEXEMS_TYPES.LINE);
      } else {
        pushAndFlush('-', LEXEMS_TYPES.TIRE);
      }
    };
  }
);

module.exports = {
  tireTest,
  lineTest
};
