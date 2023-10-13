//Add up to function to test time used

// const addUpTo  = (n) => {
//   let total = 0;

//   for(let i = 0; i <= n; i++){
//     total += i;
//   }

//   return total;
// }

const addUpTo = (n) => {
  return (n * (n + 1)) / 2;
};

const t1 = performance.now();
console.log(addUpTo(1000000));
const t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} ms`);

//Big o notation shorthand
// 1. Arithmetic Operations are constant
// 2. Variables assignment is constant.
// 3. Accessing element in an array by index arr[index] or on object key obj[key] is constant.
// 4. In a loop: The complexity is the length of the loop times of what happen inside the lopp.

const atLeastFive = (n) => {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
  console.log('atLeastFive');
};

const mostFive = (n) => {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

atLeastFive(6)
mostFive(6)
