const assert = require('assert');
const { multiply } = require('../utils/math');

const result = multiply(2, 4);
const expected = 8;

assert.ok(expected === result);
