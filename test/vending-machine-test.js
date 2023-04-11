const vendingMachine = require('../src/vending-machine.js');
const testing = require('../lib/testing.js');

const assert = testing.assertTest;
const displayTestLog = testing.displayTestLog;
const coinsDispensed = vendingMachine.coinsDispensed;

assert(coinsDispensed(0), 0, "0 rupees should return 0 coins", "coinsDispensed()");
assert(coinsDispensed(1), 1, "1 rupees should return 0 coins", "coinsDispensed()");

displayTestLog();
