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

const testCoinsToDispense = function () {
  displayHeader("coinsToDispense");
  assert(0, dispenseCoins(0, []), "0 rupees with [] denominations should return 0 coins", "dispenseCoins()");
  assert(1, dispenseCoins(1, [1]), "1 rupees with [1] denominations should return 1 coins", "dispenseCoins()");

  assert(1, dispenseCoins(2, [1, 2]), "2 rupees with [1, 2] denominations should return 1 coins", "dispenseCoins()");
  assert(2, dispenseCoins(3, [1, 2]), "3 rupees with [1, 2] denominations should return 2 coins", "dispenseCoins()");

  assert(1, dispenseCoins(5, [1, 2, 5]), "5 rupees with [1, 2, 5] denominations should return 1 coins", "dispenseCoins()");

  assert(1, dispenseCoins(10, [1, 2, 5, 10]), "10 rupees with [1, 2, 5, 10] denominations should return 1 coins", "dispenseCoins()");
  assert(3, dispenseCoins(8, [1, 2, 5, 10]), "8 rupees with [1, 2, 5, 10] denominations should return 3 coins", "dispenseCoins()");
  assert(2, dispenseCoins(12, [1, 2, 5, 10]), "12 rupees with [1, 2, 5, 10] denominations should return 2 coins", "dispenseCoins()");
  assert(4, dispenseCoins(18, [1, 2, 5, 10]), "18 rupees with [1, 2, 5, 10] denominations should return 4 coins", "dispenseCoins()");

  assert(4, dispenseCoins(13, [1, 2, 5]), "13 rupees with [1, 2, 5] denominations should give 4 coins", "dispenseCoins()");
  assert(4, dispenseCoins(13, [1, 4, 7]), "13 rupees with [1, 4, 7] denominations should give 4 coins", "dispenseCoins()");
  assert(4, dispenseCoins(18, [1, 5, 10, 2,]), "18 rupees with [1, 5, 10, 2] denominations should give 4 coins", "dispenseCoins()");
}
/* function testMaxOfNumbers ---------------{{{ */
const testMaxOFNumbers = function () {
  displayHeader("maxOfNumbers");
  assert(10, maxOfNumbers([1, 5, 10, 2]), "[1, 5, 10, 2] should give the max number 10", "maxOfNumbers()");
  assert(20, maxOfNumbers([1, 5, 10, 20, 7, 6, 2]), "[1, 5, 10, 20, 7, 6, 2] should give the max number 20", "maxOfNumbers()");
}
/*----}}} */
const testMaxSort = function () {
  const fnName = ""
  displayHeader(fnName);
  assertArray([10, 5, 2, 1], maxSort([1, 5, 10, 2]), "[1, 5, 10, 2] should give a sorted array in decending order [10, 5, 2, 1]", "maxSort()");
  assertArray([20, 10, 9, 5, 2, 1], maxSort([1, 20, 5, 9, 10, 2]), "[1, 5, 10, 2] should give a sorted array in decending order [10, 5, 2, 1]", "maxSort()");
}

const testDispenseCoinsByDenominations =  function () {
  const fnName = "getCoinsByAmount"
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
testDispenseCoinsByDenominations();
displaySummary();
