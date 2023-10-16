// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(arr) {
  let result = [];
  if (arr.length === 0) return [];

  if (typeof arr[0] === 'object' && Array.isArray(arr[0])) {
    result = result.concat(flatten(arr[0]));
  } else {
    result.push(arr[0]);
  }

  result = result.concat(flatten(arr.slice(1)));

  return result;
}

const result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
console.log(result);
