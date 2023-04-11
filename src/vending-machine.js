const  coinsToDispense = function (rupees) {
  const twoRupeesCoins = Math.floor(rupees / 2);
  const remainingAmount = rupees % 2;
  const oneRupeeCoin = remainingAmount / 1;
  return  twoRupeesCoins + oneRupeeCoin;
}

exports.coinsToDispense = coinsToDispense;
