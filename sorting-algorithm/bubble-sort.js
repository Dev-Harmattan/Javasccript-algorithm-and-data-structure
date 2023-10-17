// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping 
// the adjacent elements if they are in the wrong order.

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
}

console.log(bubbleSort([2, 90, 3, 37, 83, 83]));
