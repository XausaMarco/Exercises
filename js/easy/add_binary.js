/**
 *
 * https://leetcode.com/problems/add-binary/
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

function addBinary(a, b) {

  if (a.length < b.length) a = a.padStart(b.length, "0");
  else b = b.padStart(a.length, "0");

  let result = "";
  let i = a.length - 1;
  let carryOver = 0;
  while (i >= 0) {
    if (a[i] === "0" && a[i] === b[i]) {
      result = 0 + carryOver + result;
      carryOver = 0;
    } else if (
      a[i] === "1" &&
      a[i] === b[i]
    ) {
      result = 0 + carryOver + result;
      carryOver = 1;
    } else if (a[i] !== b[i]) {
      result = 1 - carryOver + result;
    }

    if (i === 0 && carryOver) {
      result = 1 + result;
    }

    i--;
  }

  return result;
}

//There could be a solution without using padding, skipping the thing completely

const a = "11";
const b = "10";

console.log(addBinary(a, b));
