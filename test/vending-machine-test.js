const vendingMachine = require('../src/vending-machine.js');
const testing = require('../lib/testing.js');

const assert = testing.assertTest;
const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const displayTestLog = testing.displayTestLog;
const displaySummary = testing.displaySummary;
const displayHeader = testing.displayHeader;
const vendCoins = vendingMachine.vendCoins;
const vendCoinsByDenominations = vendingMachine.vendCoinsByDenominations;

const testOrderedDenominations = function (fnName) {
  let message = "₹0 gives gives 0 coins for any denominations";
  assert(0, vendCoins(0, []), message , fnName);
  message = "₹1 vending machine gives the same amount of coins as the money";
  assert(1, vendCoins(1, [1]), message, fnName);
  message = "₹1 and ₹2 coin vending machine when given amount ₹2 gives 1 coin of ₹2";
  assert(1, vendCoins(2, [1, 2]), message, fnName);
  message = "₹1 and ₹2 coin vending machine when given amount ₹3 gives 2 coins one coin of each denomination";
  assert(2, vendCoins(3, [1, 2]), message, fnName);
  message = "₹1, ₹2 and ₹5 coin vending machine when given amount ₹5 gives 1 coins of ₹5" ;
  assert(1, vendCoins(5, [1, 2, 5]), message, fnName);
  message = "₹1, ₹2, ₹5 and ₹10 coin vending machine when given amount ₹10 gives 1 coins of ₹10" ;
  assert(1, vendCoins(10, [1, 2, 5, 10]), message, fnName);
  message = "₹1, ₹2, ₹5 and ₹10 coin vending machine when given amount ₹18 gives 4 coins one coin of each denomination" ;
  assert(4, vendCoins(18, [1, 2, 5, 10]), message, fnName);
}

const testVendCoins = function () {
  const fnName = "vendCoins";
  displayHeader(fnName);
  testOrderedDenominations(fnName);
  let message = "Testing with sorted denominations";
  assert(4, vendCoins(13, [1, 2, 5]), message, fnName);
  message =  "Testing with any denominations";
  assert(4, vendCoins(13, [1, 4, 7]), message, fnName);
  message = "Testing with unsorted denominations";
  assert(4, vendCoins(18, [1, 5, 10, 2,]), message, fnName);
}

const testVendCoinsByDenominations =  function () {
  const fnName = "vendCoinsByDenominations";
  displayHeader(fnName);
  let message = "₹0 with any denominations gives O coins for all denomination";
  assertObject({1:0, 2:0}, vendCoinsByDenominations(0, [1 ,2]), message, fnName);
  message = "Any amount with no denomination gives nothing";
  assertObject({}, vendCoinsByDenominations(5, []), message, fnName);
  message = "₹18 with denominations of ₹1, ₹2, ₹5 and ₹10 in any order gives one coin of each denominations";
  assertObject({1:1, 2:1, 5:1, 10:1},vendCoinsByDenominations(18, [1 ,5, 10, 2]), message, fnName);
}

const runtests = function () {
  testVendCoins();
  testVendCoinsByDenominations();
  displaySummary();
}

runtests();
