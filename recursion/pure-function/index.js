function collectOddValues(input) {
  let result = [];

  if (input.length === 0) return result;

  if (input[0] % 2 !== 0) {
    result.push(input[0]);
  }

  result = result.concat(collectOddValues(input.slice(1)));

  return result;
}

const result = collectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10, 12]);
console.log(result);
