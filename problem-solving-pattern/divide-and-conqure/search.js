//Giving a sorted array of integers, write a function called search, that accepts a values and returns the index where the values passed to the function is located. if the values is not found, return -1

function search(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log('Middle ', middle)

  while (start <= end) {
    let result = arr[middle];
    if (result === num) {
      return middle;
    } else if (result > num) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
    console.log('Middle ', middle);
  }

  return -1;
}



const result  = search([1, 2, 3, 4, 5, 6, 7], 4);
console.log(result);
