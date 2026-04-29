/**
 * Palindrome number https://leetcode.com/problems/palindrome-number/

 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let str = x.toString();
  const length = str.length;

  let i = 0;

  while (str[i] === str[length - i - 1]) {
    if (i >= length - i - 1) return true;
    i++;
  }

  return false;
}; //beats 10%

var isPalindrome2 = function (x) {
  if (x < 0) return false;

  let str = x.toString();
  const len = str.length;

  const firstHalfEnd = len % 2 == 0 ? len / 2 : Math.trunc(len / 2);
  const secondHalfStart = len % 2 == 0 ? len / 2 : Math.trunc(len / 2) + 1;
  const firstHalf = str.slice(0, firstHalfEnd);
  const secondHalf = str
    .slice(secondHalfStart, len)
    .split("")
    .reverse()
    .join("");

  return firstHalf == secondHalf;
}; // beats 30%

/**
 * Optimized solution
 * Idea: do not convert the number to string, use modules and divisions by 10
 */
var isPalindromeOpt = function (x) {
  let num = x;
  let rev = 0;
  while (num != 0) {
    rev = rev * 10 + (num % 10);
    num = Math.trunc(num / 10);
  }

  return x === rev;
}; //Beats 46%, expected bettere results, room for improvements

const input = 373737373737373;
console.log(isPalindrome(input));
console.log(isPalindrome2(input));
console.log(isPalindromeOpt(input));
