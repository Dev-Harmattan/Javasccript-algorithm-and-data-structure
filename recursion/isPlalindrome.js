// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(string) {
  function helper(str) {
    let result = '';
    if (str.length <= 0) return result;
    result += str[str.length - 1];
    result = result.concat(helper(str.slice(0, str.length - 1)));
    return result;
  }

  return string === helper(string);
}

console.log(isPalindrome('akeea'));
