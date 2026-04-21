/**
 * https://leetcode.com/problems/plus-one/
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;

  do {
    if (digits[index] + 1 > 9) {
      digits[index] = 0;
      if (index === 0) {
        digits.unshift(1);
      }
    } else {
      digits[index] = digits[index] + 1;
    }

    index--;
  } while (digits[index + 1] == 0 && index >= 0);

  return digits;
};

console.log(plusOne([8, 9, 9, 9]));
