const maxOfTwo = function (number1, number2) {
  return number1 > number2 ? number1 : number2;
}

const maxOfNumbers = function (numbers) {
  let max = numbers[0];
  for (const number of numbers) {
    max = maxOfTwo(max, number);
  }
  return max
}

const maxSort = function (array) {
  let tempArray = array.slice();
  const sortedArray = [];
  for (const index in array) {
    const max = maxOfNumbers(tempArray);
    const maxIndex = tempArray.indexOf(max);
    tempArray.splice(maxIndex,1);
    sortedArray.push(max);
  }
  return sortedArray;
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
exports.maxSort = maxSort;
exports.maxOfNumbers = maxOfNumbers;
exports.getCoinsByAmount = getCoinsByAmount;
