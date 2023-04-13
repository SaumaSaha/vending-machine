const sort = require('../lib/sort.js');

const maxSort = sort.maxSort;

const calculateNoOfCoinsOf = function (amount, denomination) {
  return Math.floor(amount / denomination);
}

const getRemainingAmount = function (amount ,denomination) {
  return amount % denomination;
}

const  dispenseCoins = function (rupees, denominations) {
  let totalCoins = 0;
  let remainingAmount = rupees;
  const sortedDenominations = maxSort(denominations);

  for (denomination of sortedDenominations) {
    const noOfCoins = calculateNoOfCoinsOf(remainingAmount, denomination);
    remainingAmount = getRemainingAmount(remainingAmount, denomination);
    totalCoins += noOfCoins;
  }
  return totalCoins; 
}

const getCoinsByAmount = function (rupees, denominations) {
  let remainingAmount = rupees;
  let denominationObject = {};
  const sortedDenominations = maxSort(denominations);

  for (denomination of sortedDenominations) {
    const noOfCoins = calculateNoOfCoinsOf(remainingAmount, denomination);
    remainingAmount = getRemainingAmount(remainingAmount, denomination);
    denominationObject[denomination] = noOfCoins;
  }
  return denominationObject; 
}

exports.dispenseCoins = dispenseCoins;
exports.getCoinsByAmount = getCoinsByAmount;
