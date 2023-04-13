const sort = require('../lib/sort.js');

const maxSort = sort.maxSort;

const calculateNoOfCoinsOf = function (amount, denomination) {
  return Math.floor(amount / denomination);
}

const getRemainingAmount = function (amount ,denomination) {
  return amount % denomination;
}

const  vendCoins = function (rupees, denominations) {
  let totalCoins = 0;
  const coins = vendCoinsByDenominations(rupees, denominations);
  for (const coin in coins) {
    totalCoins += coins[coin];
  }

  return totalCoins;
}

const vendCoinsByDenominations = function (rupees, denominations) {
  let remainingAmount = rupees;
  let coinsCount = {};
  const sortedDenominations = maxSort(denominations);

  for (denomination of sortedDenominations) {
    const noOfCoins = calculateNoOfCoinsOf(remainingAmount, denomination);
    remainingAmount = getRemainingAmount(remainingAmount, denomination);
    coinsCount[denomination] = noOfCoins;
  }
  return coinsCount; 
}

exports.vendCoins = vendCoins;
exports.vendCoinsByDenominations = vendCoinsByDenominations;
