/**
 * https://leetcode.com/problems/search-insert-position/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let found = false;
  let index =0;
  while (!found) {
    let i = Math.trunc(nums.length / 2);
    index += i;
    if (nums[i] > target) {
      if (nums.length == 1) return index;
      nums = nums.slice(0, i);
      index -= i;
    } else if (nums[i] < target) {
      if (nums.length == 1) return index + 1;
      nums = nums.slice(i);
    } else if (nums[i] === target) {
      return index;
    }
  }
};

console.log(searchInsert([1,3,5,6],7));


