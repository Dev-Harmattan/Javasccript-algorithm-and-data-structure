function collectOddValues(input) {
  const result = [];

  function helper(data) {
    if (data.length === 0) return;

    if (data[0] % 2 !== 0) {
      result.push(data[0]);
    }
    helper(data.slice(1));
  }
  helper(input);
  return result;
}

const result = collectOddValues([2, 3, 4, 5, 6, 7, 8, 9, 10, 12]);
console.log(result);
