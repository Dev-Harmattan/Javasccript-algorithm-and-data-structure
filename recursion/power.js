// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()
//  - do not worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;

  return base * power(base, exponent - 1);
}

const result = power(2, 2);
console.log('Result: ' + result);
