const testing = require('../lib/testing.js');
const sort = require('../lib/sort.js');

const assert = testing.assertTest;
const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const displayTestLog = testing.displayTestLog;
const displaySummary = testing.displaySummary;
const displayHeader = testing.displayHeader;
const maxSort = sort.maxSort;
const maxOfNumbers = sort.maxOfNumbers;

const testMaxOFNumbers = function () {
  displayHeader("maxOfNumbers");
  assert(10, maxOfNumbers([1, 5, 10, 2]), "[1, 5, 10, 2] should give the max number 10", "maxOfNumbers()");
  assert(20, maxOfNumbers([1, 5, 10, 20, 7, 6, 2]), "[1, 5, 10, 20, 7, 6, 2] should give the max number 20", "maxOfNumbers()");
}

const testMaxSort = function () {
  const fnName = "maxSort";
  displayHeader(fnName);
  assertArray([10, 5, 2, 1], maxSort([1, 5, 10, 2]), "[1, 5, 10, 2] should give a sorted array in decending order [10, 5, 2, 1]", "maxSort()");
  assertArray([20, 10, 9, 5, 2, 1], maxSort([1, 20, 5, 9, 10, 2]), "[1, 5, 10, 2] should give a sorted array in decending order [10, 5, 2, 1]", "maxSort()");
}

testMaxOFNumbers();
testMaxSort();
displaySummary();
