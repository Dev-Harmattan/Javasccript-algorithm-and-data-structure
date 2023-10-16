function countDown(num) {
  if(num <= 0) return;
  console.log(num);
  countDown(num - 1);
}
// countDown(5)

function sumRange(num) {
  if(num <= 1) return 1;
  return num + sumRange(num - 1);
}

// const result = sumRange(5)

function factorial(num) {
  if(num <= 1) return 1;
  return num * factorial(num - 1);
}
const result = factorial(3)
console.log('Result: ' + result);