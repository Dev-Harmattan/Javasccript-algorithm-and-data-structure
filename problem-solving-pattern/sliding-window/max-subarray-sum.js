// Find sum array max

// Quack solution
// function maxSubArraySum(arr, num) {
//   if (arr.length === 0) return null;

//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temSum = 0;
//     for (let j = 0; j < num; j++) {
//       temSum += arr[j];
//     }
//     if (temSum > max) {
//       max = temSum;
//     }
//   }
// }

function maxSubArraySum(arr, num) {
  if (arr.length === 0) return null;

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
const result = maxSubArraySum([1, 2, 3, 4, 4, 5, 8, 6, 2], 4);
console.log('Result: ' + result);
