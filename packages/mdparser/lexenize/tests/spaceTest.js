'use strict';

const {createTest} = require('../utils');
const {PRIORITIES} = require('../consts');

const spaceTest = createTest(' ', PRIORITIES.NORMAL, (tokens, {resetPointer}) => {
  return () => {
    resetPointer();
  };
});

module.exports = {
  spaceTest
};
