// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...items) {
  if (items.length === 0) return false;

  let frequencyCounter = {};
  for (let value of items) {
    frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
    if (frequencyCounter[value] > 1) return true;
  }
  return false;
}

const result = areThereDuplicates(1, 2, 3, 3); // true
console.log('result: ', result);
