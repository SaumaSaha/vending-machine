const testLog = [];

const updateTestLog = function(expected, actual, message, result, functionName) {
  testLog.push(
    {
      result,
      message,
      expected,
      actual,
      functionName
    });
}

const assertTest = function(expected, actual, message, functionName) {
  const result = expected === actual ? true : false;
  console.log(result,message);
  updateTestLog(expected, actual, message, result, functionName);
}

const getTestLog = function () {
  return testLog;
}

const getNoOfTestPassed = function (log) {
  let noOfTestPassed = 0;
  for ( const entry of log) {
    noOfTestPassed +=  entry.result === true ? 1 : 0;
  }
  return noOfTestPassed;
}

const groupTestLogByKey = function (key) {
  const groups = {};
  for (const log of getTestLog()) {
    if (!groups[log[key]])
      groups[log[key]] = [];
    groups[log[key]].push(log);
  }

  return groups;
}

const displayTestLog = function () {
  const log = getTestLog();
  console.table(log);
  console.log("No of Test Passed = ", getNoOfTestPassed(log) + "/" + log.length);
}

const printFunctionTests = function(functionName) {
  const log = groupTestLogByKey("functionName");
  console.table(log[functionName]);
  console.log("No of Test Passed = ", getNoOfTestPassed(log[functionName]) + "/" + log[functionName].length);
}

exports.assertTest = assertTest;
exports.getTestLog = getTestLog;
exports.displayTestLog = displayTestLog;
