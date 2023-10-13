//Implement a function called countUniqueValues, which will accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted.

const countUniqueValues = (arr) => {
  let uniqueCounter = 0;
  let shiftCounter = 1;

  while (shiftCounter < arr.length) {
    if (arr[uniqueCounter] == arr[shiftCounter]) {
      ++shiftCounter;
    } else {
      ++uniqueCounter;
      arr[uniqueCounter] = arr[shiftCounter];
      ++shiftCounter;
    }
  }
  return uniqueCounter + 1;
};

console.log('Result ', countUniqueValues([2, 2, 2, 5]));
