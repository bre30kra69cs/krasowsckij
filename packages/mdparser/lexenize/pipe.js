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
const {bracketLTest, bracketRTest} = require('./tests/bracketTest');
const {slashTest} = require('./tests/slashTest');
const {underscoreTest} = require('./tests/underscoreTest');
const {hashTest, hashBreakTest} = require('./tests/hashTest');
const {colonTest} = require('./tests/colonTest');
const {commaTest} = require('./tests/commaTest');
const {parenthesesLTest, parenthesesRTest} = require('./tests/parenthesesTest');

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
  pointTest,
  bracketLTest,
  bracketRTest,
  slashTest,
  underscoreTest,
  hashTest,
  hashBreakTest,
  colonTest,
  commaTest,
  parenthesesLTest,
  parenthesesRTest
];

module.exports = {
  tests
};
