function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  let maxCount = mostDigits(arr);
  for (let i = 0; i < maxCount; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}

console.log(radixSort([23, 567, 89, 12234324, 90]));
