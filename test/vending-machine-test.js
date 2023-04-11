const vendingMachine = require('../src/vending-machine.js');
const testing = require('../lib/testing.js');

const assert = testing.assertTest;
const test = vendingMachine.test;
const displayTestLog = testing.displayTestLog;

assert(test(), 1, "Test Passes", "demoTest");
assert(test(), 0, "Test Fails", "demoTest" );

displayTestLog();
