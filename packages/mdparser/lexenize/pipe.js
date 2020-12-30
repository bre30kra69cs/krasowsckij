'use strict';

const {spaceTest} = require('./tests/spaceTest');
const {breakTest, breakLineTest} = require('./tests/breakTest');
const {boldDoubleTest, boldSingleTest} = require('./tests/boldTest');
const {tireTest, lineTest} = require('./tests/lineTest');
const {textTest, textBreakTest} = require('./tests/textTest');
const {numberTest, numberBreakTest} = require('./tests/numberTest');
const {noneTest} = require('./tests/noneTest');
const {exclamationTest} = require('./tests/exclamationTest');
const {pointTest} = require('./tests/pointTest');

const tests = [
  breakTest,
  spaceTest,
  breakLineTest,
  boldDoubleTest,
  boldSingleTest,
  tireTest,
  lineTest,
  textTest,
  textBreakTest,
  numberTest,
  numberBreakTest,
  noneTest,
  exclamationTest,
  pointTest
];

module.exports = {
  tests
};
