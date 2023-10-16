// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(firstInput, secondInput) {
  let a = firstInput.toString();
  let b = secondInput.toString();
  if (a.length !== b.length) return false;

  let firstFrequencyCounter = {};
  let secondFrequencyCounter = {};

  for (let value of a) {
    firstFrequencyCounter[value] = (firstFrequencyCounter[value] || 0) + 1;
  }

  for (let value of b) {
    secondFrequencyCounter[value] = (secondFrequencyCounter[value] || 0) + 1;
  }

  for (let key in firstFrequencyCounter) {
    if (!(key in secondFrequencyCounter)) {
      return false;
    }

    if (!(firstFrequencyCounter[key] === secondFrequencyCounter[key]))
      return false;
  }

  return true;
}

const result = sameFrequency(14, 14); // false
console.log('Result: ' + result);
