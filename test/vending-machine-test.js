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
  assert(coinsToDispense(5), 3, "5 rupees should return 3 coins", "coinsToDispense()");
}

testCoinsToDispense();
displayTestLog();
