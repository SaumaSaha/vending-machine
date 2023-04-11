const vendingMachine = require('../src/vending-machine.js');
const testing = require('../lib/testing.js');

const assert = testing.assertTest;
const displayTestLog = testing.displayTestLog;
const coinsToDispense = vendingMachine.coinsToDispense;

const testCoinsToDispense = function () {
  assert(coinsToDispense(0), 0, "0 rupees should return 0 coins", "coinsToDispense()");
  assert(coinsToDispense(1), 1, "1 rupees should return 1 coins", "coinsToDispense()");
  assert(coinsToDispense(2), 1, "2 rupees should return 1 coins", "coinsToDispense()");
  assert(coinsToDispense(3), 2, "3 rupees should return 2 coins", "coinsToDispense()");
  assert(coinsToDispense(5), 1, "5 rupees should return 1 coins", "coinsToDispense()");
  assert(coinsToDispense(10), 1, "10 rupees should return 1 coins", "coinsToDispense()");
  assert(coinsToDispense(8), 3, "8 rupees should return 3 coins", "coinsToDispense()");
  assert(coinsToDispense(12), 2, "12 rupees should return 2 coins", "coinsToDispense()");
  assert(coinsToDispense(18), 4, "18 rupees should return 4 coins", "coinsToDispense()");
}

testCoinsToDispense();
displayTestLog();
