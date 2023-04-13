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
  const fnName = "maxOfNumbers";
  displayHeader(fnName);
  let message = "Empty list of numbers will give undefined";
  assert(undefined, maxOfNumbers([]), message, fnName);
  message = "List with one number return that numbers";
  assert(1, maxOfNumbers([1]), message, fnName);
  message = "List with positive numbers returns max of those numbers";
  assert(10, maxOfNumbers([1, 5, 10, 2]), message, fnName);
}

const testMaxSort = function () {
  const fnName = "maxSort";
  displayHeader(fnName);
  let message = "Empty list return empty list";
  assertArray([], maxSort([]), message, fnName);
  message = "List with one number returns the same list";
  assertArray([1], maxSort([1]), message, fnName);
  message = "A list sorted in descending order returns the same list";
  assertArray([10, 5, 2, 1], maxSort([10, 5, 2, 1]), message, fnName);
  message = "An unordered list returns a list sorted in descending order";
  assertArray([20, 10, 9, 5, 2, 1], maxSort([1, 20, 5, 9, 10, 2]), message, fnName);
}

const runtests = function () {
  testMaxOFNumbers();
  testMaxSort();
  displaySummary();
}

runtests();
