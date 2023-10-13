//Write a function that accepts a sorted integer array and returns the first pair of which sum is equal to zero.
// e.g sumZero([-2, -1 0, 1, 2, 3,]) return  [-2, 2]

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    sum > 0 ? --right : ++right;
  }
  return undefined;
};

const result = sumZero([-2, -1, 0, 1, 2, 3, 4]);
console.log('Result ', result);
