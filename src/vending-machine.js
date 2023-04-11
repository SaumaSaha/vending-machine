const calculateNoOfCoinsOf = function (amount, denomination) {
  return Math.floor(amount / denomination);
}

const getRemainingAmount = function (amount ,denomination) {
  return amount % denomination;
}

const  coinsToDispense = function (rupees) {
  const fiveRupeesCoins = calculateNoOfCoinsOf(rupees, 5);
  let remainingAmount = getRemainingAmount(rupees, 5);
  const twoRupeesCoins = calculateNoOfCoinsOf(remainingAmount, 2);
  remainingAmount = getRemainingAmount(remainingAmount, 2);
  const oneRupeeCoins = calculateNoOfCoinsOf(remainingAmount, 1);
  return  fiveRupeesCoins + twoRupeesCoins + oneRupeeCoins;
}

exports.coinsToDispense = coinsToDispense;
