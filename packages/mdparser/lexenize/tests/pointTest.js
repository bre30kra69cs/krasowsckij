'use strict';

const {createTest} = require('../utils');
const {PRIORITIES, LEXEMS_TYPES} = require('../consts');

const pointTest = createTest('.', PRIORITIES.NORMAL, (tokens, {pushAndFlush}) => {
  return () => {
    pushAndFlush('.', LEXEMS_TYPES.POINT);
  };
});

module.exports = {
  pointTest
};
