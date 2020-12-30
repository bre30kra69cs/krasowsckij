'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const tireTest = createTest('-', PRIORITIES.NORMAL, (tokens, {setValue}) => {
  return () => {
    setValue('-');
  };
});

const lineTest = createTest(
  {
    prevToken: '-',
    curToken: '-'
  },
  PRIORITIES.HIGH,
  (tokens, {getValue, setValue, pushAndFlush}) => {
    return () => {
      if (getValue().length === 2) {
        pushAndFlush('-', LEXEMS_TYPES.LINE);
      } else {
        setValue('-');
      }
    };
  }
);

module.exports = {
  tireTest,
  lineTest
};
