/**
 * https://leetcode.com/problems/happy-number/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number} n
 * @return {boolean}
 */

/**
 * Considerations:
 * I was trying to find  rule to tell whether a number would converge to 1 without the looping
 * to avoid infinite loops. The point is that for this problem you don't need to avoid the infinite loop,
 * you just need to understand when it happens. It can happen:
 * - for repeating numbers (the loop becomes a cicle around the same numbers)
 *   20 → 4 →　16 → 37 → 58 → 89 → 145 → 42 → (20...)
 * - it diverges to infinity. But can it?
 *   Not really. If we have, let's suppose 6 digits, the maximum number that 6 digits can produce is
 *   9²+9²+9²+9²+9²+9²= 486. This means the number will NEVER diverge to infinity
 * So basically we just need to run the loop, store all values we see in a hasmap, and whenever a number
 * is seen twice that means we're in a loop
 */

function getNumber(n) {
  let sum = 0;
  while (n > 0) {
    const val = n % 10;
    n = Math.trunc(n / 10);
    sum += val * val;
  }
  return sum;
}

var isHappy = function (n) {
  let map = {};

  while (map[n] != 2) {
    n = getNumber(n);
    if (n === 1) return true;
    else map[n] = map[n] ? 2 : 1;
  }
  return false;
};

console.log(isHappy(19));
