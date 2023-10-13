// same function that accepts two arrays as an argument such that the frequency must be the same
// The first array has its corresponding value square in the second array

// const same = (firstArray, secondArray) => {
//   if (firstArray.length !== secondArray.length) return false;
//   const secondObjectMap = {};

//   for (let value of secondArray) {
//     secondObjectMap[value] = value;
//   }

//   for (let value of firstArray) {
//     let squareValue = Math.pow(value, 2);
//     if (!secondObjectMap[squareValue]) {
//       return false;
//     }
//   }
//   return true;
// };

const same = (firstArray, secondArray) => {
  const firstFrequencyCounter = {};
  const secondFrequencyCounter = {};

  for (let value of firstArray) {
    firstFrequencyCounter[value] = ++firstFrequencyCounter[value] || 1;
  }

  for (let value of secondArray) {
    secondFrequencyCounter[value] = ++secondFrequencyCounter[value] || 1;
  }

  for (let key in firstFrequencyCounter) {
    if (!(key ** 2 in secondFrequencyCounter)) {
      return false;
    }
    if (!(secondFrequencyCounter[key ** 2] === firstFrequencyCounter[key])) {
      return false;
    }
  }
  return true;
};

const result = same([2, 90, 4, 4], [4, 9, 16, 16]);
console.log('Result: ' + result);
