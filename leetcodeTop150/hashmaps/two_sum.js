/**
 * Two sum exercise https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * My solution: brute force all solutions until the valid one is found.
 * Takes 163 ms (best ones around 1-2 ms) -> a lot of room for improvement
 */
var twoSum = function (nums, target) {
  nums = [2, 5, 5, 11];
  let sum;
  let i = 0;
  let j;

  while (sum != target && i < nums.length - 1) {
    j = i + 1;

    while (sum != target && j < nums.length) {
      sum = nums[i] + nums[j];

      j++;
    }
    i++;
  }

  return [i - 1, j - 1];
};

/**
 * Idea: leverage a dictionary.
 * At every interaction, search in the dictionary the target-nums[i] entry.
 * if it is not found add the actual number to the dictionary.
 * dictionaty will have pairs number-index
 */
var twoSumBestSolution = function (nums, target) {
  let dictionary = {};

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (num in dictionary) {
      return [i, dictionary[num]];
    }
    dictionary[nums[i]] = i;
  }
  return [];
};

//console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSumBestSolution([2, 5, 5, 11], 10));
