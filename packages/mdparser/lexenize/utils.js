'use strict';

const {PRIORITIES} = require('./consts');

const createTest = (predict, rate, fn) => {
  return (tokens, utils) => {
    if (typeof predict === 'string') {
      if (tokens.curToken === predict) {
        return [rate, fn(tokens, utils)];
      }
    }

    if (typeof predict === 'object') {
      const isEqual = Object.keys(predict).every((key) => {
        return predict[key] === tokens[key];
      });

      if (isEqual) {
        return [rate, fn(tokens, utils)];
      }
    }

    if (typeof predict === 'function') {
      const isMatched = predict(tokens);

      if (isMatched) {
        return [rate, fn(tokens, utils)];
      }
    }

    return [PRIORITIES.NONE];
  };
};

module.exports = {
  createTest
};
