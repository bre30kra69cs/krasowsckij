'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const boldSingleTest = createTest('*', PRIORITIES.NORMAL, (tokens, {setValue}) => {
  return () => {
    setValue('*');
  };
});

const boldDoubleTest = createTest(
  {
    prevToken: '*',
    curToken: '*'
  },
  PRIORITIES.HIGH,
  (tokens, {pushAndFlush}) => {
    return () => {
      pushAndFlush('*', LEXEMS_TYPES.BOLD);
    };
  }
);

module.exports = {
  boldDoubleTest,
  boldSingleTest
};
