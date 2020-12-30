'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const breakTest = createTest('\n', PRIORITIES.NORMAL, (tokens, {resetPointer}) => {
  return () => {
    resetPointer();
  };
});

const breakLineTest = createTest(
  {
    prevToken: '\n',
    curToken: '\n'
  },
  PRIORITIES.HIGH,
  (tokens, {pushAndFlush}) => {
    return () => {
      pushAndFlush('', LEXEMS_TYPES.BREAK_LINE);
    };
  }
);

module.exports = {
  breakTest,
  breakLineTest
};
