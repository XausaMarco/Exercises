/**
 *
 * https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */

//exceeds time limits (used right to avoid recursion)
var climbStairsRecursive = function (n) {
  if (n - 1 == 0) return 1;
  else if (n - 2 == 0) return 2;
  else return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * Idea: to get to each step you can do 1 or 2 steps.
 * so #ways_to_a_step = #ways_to_1_step_before + #ways_to_2_steps_before.
 * It's easy to calculate #ways_to_1_step_before and #ways_to_2_steps_before for n=3,2 and 1.
 * so use this knowledge to iterate.
 * It's basically just a fibonacci series
 */
var climbStairs = function (n) {
  // for the first two steps, return immediately
  if (n <= 3) return n;

  // for the third on, sum all possible ways to get to the 1 step before or 2 steps before
  let prev1 = 3; // number of ways to get to the 3th step
  let prev2 = 2; // number of ways to get to the 2nd step
  let current = 0;

  // i means "i know #ways up to the i-th step", 
  // the loop iteration will calculate it for the following one
  for (let i = 3; i < n; i++) {
    current = prev1 + prev2; //ways to get to the i-th step
    prev2 = prev1;
    prev1 = current;
  }

  return current;
};

console.log(climbStairs(44));
