/**
 * https://leetcode.com/problems/plus-one/
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;

  do {
    digits[index] = digits[index] + 1 > 9 ? 0 : digits[index] + 1;
    if (index == 0 && digits[index] == 0) {
      digits.unshift(1);
    }
    index--;
  } while (digits[index] + 1 > 9 && index > 0);

  return digits;
};
