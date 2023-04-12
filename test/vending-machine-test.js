const vendingMachine = require('../src/vending-machine.js');
const testing = require('../lib/testing.js');

const assert = testing.assertTest;
const displayTestLog = testing.displayTestLog;
const displaySummary = testing.displaySummary;
const dispenseCoins = vendingMachine.dispenseCoins;

const testCoinsToDispense = function () {
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
}


testCoinsToDispense();
displaySummary();
