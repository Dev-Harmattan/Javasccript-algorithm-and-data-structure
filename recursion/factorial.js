function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

const result = factorial(4);
console.log('Result: ' + result);
