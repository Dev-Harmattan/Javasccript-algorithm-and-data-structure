// Similar to bubble sort, but instead of first placing large values into sorted position
// it places small values ito sorted SVGTextPositioningElement.

function selectionSort(arr) {
  function swap(arr, i, lowest) {
    return ([arr[i], arr[lowest]] = [arr[lowest], arr[i]]);
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
}

console.log(selectionSort([4, 5, 2, 8, 3, 9, 21, 6, 7]));
