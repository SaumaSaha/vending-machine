const vendingMachine = require('../src/vending-machine.js');
const testing = require('../lib/testing.js');

const assert = testing.assertTest;
const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const displayTestLog = testing.displayTestLog;
const displaySummary = testing.displaySummary;
const displayHeader = testing.displayHeader;
const dispenseCoins = vendingMachine.dispenseCoins;
const maxSort = vendingMachine.maxSort;
const maxOfNumbers = vendingMachine.maxOfNumbers;
const getCoinsByAmount = vendingMachine.getCoinsByAmount;

const testOrderedDenominations = function (fnName) {
  let message = "₹0 gives gives nothing";
  assert(0, dispenseCoins(0, []), message , fnName);
  message = "₹1 vending machine gives the same amount of coins as the money";
  assert(1, dispenseCoins(1, [1]), message, fnName);
  message = "₹1 and ₹2 coin vending machine when given amount ₹2 gives 1 coin of ₹2";
  assert(1, dispenseCoins(2, [1, 2]), message, fnName);
  message = "₹1 and ₹2 coin vending machine when given amount ₹3 gives 2 coins one coin of each denomination";
  assert(2, dispenseCoins(3, [1, 2]), message, fnName);
  message = "₹1, ₹2 and ₹5 coin vending machine when given amount ₹5 gives 1 coins of ₹5" ;
  assert(1, dispenseCoins(5, [1, 2, 5]), message, fnName);
  message = "₹1, ₹2, ₹5 and ₹10 coin vending machine when given amount ₹10 gives 1 coins of ₹10" ;
  assert(1, dispenseCoins(10, [1, 2, 5, 10]), message, fnName);
  message = "₹1, ₹2, ₹5 and ₹10 coin vending machine when given amount ₹18 gives 4 coins one coin of each denomination" ;
  assert(4, dispenseCoins(18, [1, 2, 5, 10]), message, fnName);
}

const testCoinsToDispense = function () {
  const fnName = "dispenseCoins";
  displayHeader(fnName);
  testOrderedDenominations(fnName);
  let message = "Testing with sorted denominations";
  assert(4, dispenseCoins(13, [1, 2, 5]), message, fnName);
  message =  "Testing with any denominations";
  assert(4, dispenseCoins(13, [1, 4, 7]), message, fnName);
  message = "Testing with unsorted denominations";
  assert(4, dispenseCoins(18, [1, 5, 10, 2,]), message, fnName);
}

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

const testGetCoinsByAmount =  function () {
  const fnName = "getCoinsByAmount";
  displayHeader(fnName);
  assertObject(
    {1:1, 2:1,},
    getCoinsByAmount(3, [1 ,2]),
    "18 rupees with [1, 2] denominations will give {1:1, 2:1,}",
    fnName);
  assertObject(
    {1:1, 2:1, 5:1, 10:1},
    getCoinsByAmount(18, [1 ,5, 10, 2]), 
    "3 rupees with [1, 5, 10, 2] denominations will give 1 coin of 1 rupee, 2rupees, 5 rupees and 10 rupees ", 
    fnName );
}

testCoinsToDispense();
testMaxOFNumbers();
testMaxSort();
testGetCoinsByAmount();
displaySummary();
