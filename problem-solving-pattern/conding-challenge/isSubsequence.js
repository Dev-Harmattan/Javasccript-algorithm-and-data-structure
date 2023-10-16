// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

// isSubsequence('sing', 'sting'); // true
// sing => sting
//    i        j
// isSubsequence('abc', 'acb');
// abc => acb
//  i       j

function isSubsequence(sub, string) {
  if (sub === string.substr(0, sub.length)) return true;

  let subCounter = 0;
  let stringCounter = 0;

  while (stringCounter < string.length) {
    if (sub[stringCounter] === string[stringCounter]) {
      ++stringCounter;
      ++subCounter;
    } else {
      ++stringCounter;
    }
    if (subCounter === sub.length - 1) return true;
  }

  return false
}

const result = isSubsequence('hello', 'hello world'); // true
console.log('Result: ' + result);
