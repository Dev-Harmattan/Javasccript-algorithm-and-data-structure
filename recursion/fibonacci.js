function fibonacci(num) {
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const result = fibonacci(4);
console.log('Result: ' + result);
