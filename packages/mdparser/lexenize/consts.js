'use strict';

const LEXEMS_TYPES = {
  NONE: 'NONE',
  BREAK_LINE: 'BREAK_LINE',
  BOLD: 'BOLD',
  LINE: 'LINE',
  TEXT: 'TEXT',
  NUMBER: 'NUMBER',
  EXCLAMATION: 'EXCLAMATION',
  POINT: 'POINT',
  BRACKET_L: 'BRACKET_L',
  BRACKET_R: 'BRACKET_R',
  SLASH: 'SLASH',
  UNDERSCORE: 'UNDERSCORE',
  HASH: 'HASH',
  COLON: 'COLON',
  COMMA: 'COMMA',
  TIRE: 'TIRE',
  PARENTHESES_L: 'PARENTHESES_L',
  PARENTHESES_R: 'PARENTHESES_R'
};

const PRIORITIES = {
  NONE: -1,
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
  ULTRA: 3
};

module.exports = {
  LEXEMS_TYPES,
  PRIORITIES
};
