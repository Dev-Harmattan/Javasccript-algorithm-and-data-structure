function binarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[middle] === key) return middle;

    if (arr[middle] < key) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }

    middle = Math.floor((left + right) / 2);
  }

  return -1;
}

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
console.log('Result: ' + result);
