'use strict';

const {LEXEMS_TYPES, PRIORITIES} = require('./consts');
const {tests} = require('./pipe');

const lexenize = (tokens) => {
  const result = [];

  let pointer;

  const resetPointer = () => {
    pointer = {
      type: LEXEMS_TYPES.NONE,
      value: ''
    };
  };

  resetPointer();

  const getPointer = () => {
    return pointer;
  };

  const setType = (type) => {
    getPointer().type = type;
  };

  const setValue = (value) => {
    getPointer().value += value;
  };

  const setOptions = (options) => {
    getPointer().options = options;
  };

  const getType = () => {
    return getPointer().type;
  };

  const getValue = () => {
    return getPointer().value;
  };

  const getValueHead = () => {
    return getPointer().value[0];
  };

  const getValueTail = () => {
    const value = getPointer().value;
    return value[value.length - 1];
  };

  const pushToResult = () => {
    result.push(getPointer());
  };

  const flush = () => {
    pushToResult();
    resetPointer();
  };

  const push = (value, type, options) => {
    setType(type);
    setValue(value);
    options && setOptions(options);
  };

  const pushAndFlush = (value, type, options) => {
    push(value, type, options);
    flush();
  };

  const execPriority = (priorities) => {
    const max = Math.max(...priorities.map(([rate]) => rate));

    if (max > PRIORITIES.NONE) {
      const targets = priorities.filter(([rate]) => max === rate);
      const [, run] = (targets || [])[0];
      run && run();
    }
  };

  const loop = (prevToken, curToken, nextToken) => {
    const priorities = [];

    for (let test of tests) {
      const priority = test(
        {
          prevToken,
          curToken,
          nextToken
        },
        {
          pushToResult,
          resetPointer,
          setType,
          setValue,
          getPointer,
          getValueHead,
          getValueTail,
          flush,
          pushAndFlush,
          getType,
          getValue,
          push
        }
      );

      priorities.push(priority);
    }

    execPriority(priorities);
  };

  const run = () => {
    let counter = 0;

    while (counter < tokens.length) {
      const prevToken = tokens[counter - 1];
      const curToken = tokens[counter];
      const nextToken = tokens[counter + 1];

      loop(prevToken, curToken, nextToken);

      counter += 1;
    }
  };

  run();

  return result;
};

module.exports = {
  lexenize
};
