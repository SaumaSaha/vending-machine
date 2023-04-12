/*
const sortInDecending = function (numbers) {
  const sortediList = numbers.slice(0);
  for (const index in sorted) {
    if (sortediList[index] < sortediList[index + 1]) {
      const temp = sortediList[index];
      sortediList[index] = sortediList[index + 1];
      sortediList[index + 1] = temp;
    }
  }
  return sortediList;
}

 */
const maxOfNumbers = function (numbers) {
  let max = numbers[0];
  for (const number of numbers) {
    if (max < number) {
      max = number;
    }
  }
  return max
}

const maxSort = function (array) {
  const tempArray = array.slice(0);
  return tempArray;
}

const getDenominationsInReverse = function (denominations) {
  return denominations.slice(0).reverse();
}

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

exports.dispenseCoins = dispenseCoins;
exports.maxSort = maxSort;
exports.maxOfNumbers = maxOfNumbers;
