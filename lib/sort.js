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

const maxSort = function (numbers) {
  let count = 0;
  let tempArray = numbers.slice();
  const sortedArray = [];
  while (count < numbers.length) {
    const max = maxOfNumbers(tempArray);
    const maxIndex = tempArray.indexOf(max);
    tempArray.splice(maxIndex,1);
    sortedArray.push(max);
    count++;
  }
  return sortedArray;
}

exports.maxOfNumbers = maxOfNumbers;
exports.maxSort = maxSort;
