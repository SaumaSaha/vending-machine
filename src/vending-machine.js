const calculateNoOfCoinsOf = function (amount, denomination) {
  return Math.floor(amount / denomination);
}

const getRemainingAmount = function (amount ,denomination) {
  return amount % denomination;
}

const getDenominations = function (count) {
  const denominations = [10, 5, 2, 1];
  return denominations[count];
}

const  coinsToDispense = function (rupees) {
  let totalCoins = 0;
  let remainingAmount = rupees;
  for (let count = 0; count < 4; count++) {
    const noOfCoins = calculateNoOfCoinsOf(remainingAmount, getDenominations(count));
    remainingAmount = getRemainingAmount(remainingAmount, getDenominations(count));
    totalCoins += noOfCoins;
  }
  return totalCoins; 
}

exports.coinsToDispense = coinsToDispense;
