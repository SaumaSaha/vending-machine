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
  let tempArray = array.slice(0);
  const sortedArray = [];
  for (const index in array) {
    const max = maxOfNumbers(tempArray);
    const maxIndex = tempArray.indexOf(max);
    tempArray = tempArray.slice(0,maxIndex).concat(tempArray.slice(maxIndex + 1));
    sortedArray[index] = max;
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

exports.dispenseCoins = dispenseCoins;
exports.maxSort = maxSort;
exports.maxOfNumbers = maxOfNumbers;
