/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *  Open brackets must be closed by the same type of brackets.
 *  Open brackets must be closed in the correct order.
 *  Every close bracket has a corresponding open bracket of the same type.
 *
 *
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  if (s.length % 2 != 0) return false;
  let valid = true;
  let parentheses = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let openParentheses = [];

  while (valid && s != "") {
    let acuatlParentheses = s.substring(0, 1);
    let close = parentheses[acuatlParentheses];

    if (close) {
      // the character is a closing parentheses
      if (openParentheses.pop() !== close) {
        // if the last element of openParentheses is not the opening of this
        // parentheses type then it's not valid
        valid = false;
      }
    } else {
      openParentheses.push(acuatlParentheses);
    }

    s = s.substring(1);
  }

  return openParentheses.length === 0 && valid;
};

// this solution is significantly slower
var isValidArray = function (s) {
  if (s.length % 2 != 0) return false;
  let valid = true;
  let open = ["(", "[", "{"];
  let close = [")", "]", "}"];

  s = s.split("");
  let openParentheses = [];

  while (valid && s.length > 0) {
    let acuatlParentheses = s[0];
    let closeTypeIndex = close.indexOf(acuatlParentheses);

    if (closeTypeIndex != -1) {
      // the character is a closing parentheses
      if (openParentheses.at(-1) != open[closeTypeIndex]) {
        // if the last element of openParentheses is not the opening of this
        // parentheses type then it's not valid
        valid = false;
      } else {
        // remove last element from openPharenteses
        openParentheses.pop();
      }
    } else {
      // the character is an opening parentheses
      openParentheses.push(acuatlParentheses);
    }

    s = s.slice(1);
  }

  return openParentheses.length === 0 && valid;
};

console.log(isValid("()"));
