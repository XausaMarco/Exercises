/**
 *
 * https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function (nums, k) {
    k = k % nums.length;
    const firstHalf = nums.slice(nums.length - 1 - k); // take values from nums.length -1 - k (last k values)
    const secondHalf = nums.slice(0, nums.length - 1 - k); // take values up to numslength -1 -k not included
    firstHalf.push(...secondHalf);
    /**
     * ! The assignation nums = firstHalf will not work, as
     * ! the reference to num is COPIED (the pointer is copied)
     * ! so changing nums inside this function would not affect the
     * ! nums variable passed as a parameter.
     * ! That is why splice is used.
     */

    nums.splice(0, nums.length, ...firstHalf);
};
// although this solution is O(4n), perforomance with leetcode tests set is not that bad

var rotate = function (nums, k) {
    k = k % nums.length;
    let swaps = 0;
    let index = 0;

    while (swaps < nums.length) {
        let swapValue = nums[index];
        let startIndex = index;
        let swapIndex;
        /**
         * ! Using a while loop in her is misleading. Finding the condition to close the looop
         * ! is easy.
         * * USE A DO WHILE INSTEAD AND STORE THE STARTING INDEX SO
         * * IF nums.length % k === 0; LOOPS CAN BE FOUND EASILY.
         */
        while (!swapIndex || (swapIndex && swapIndex - k > 0)) {
            swapIndex = (swapIndex + k) % nums.length; //calculate new index
            let tmp = nums[swapIndex]; // store actual value in index + x
            nums[swapIndex] = swapValue; // store swapValue in index
            swapValue = tmp; // update swapValue with index + k
            swaps++; // increase swaps amount;
        } // if k % nums.length != 0, this
        index++;
    }
};

var rotate = function (nums, k) {
    k = k % nums.length;
    let swaps = 0;
    let index = 0;

    while (swaps < nums.length) {
        let swapValue = nums[index]; // store the value just swapped
        let startIndex = index; 
        let swapIndex = index;
        do {
            swapIndex = (swapIndex + k) % nums.length; //calculate new index with module
            let tmp = nums[swapIndex]; // store actual value in index + x
            nums[swapIndex] = swapValue; // store swapValue in index
            swapValue = tmp; // update swapValue with index + k
            swaps++; // increase swaps amount;
        } while (swapIndex !== startIndex); // if nums.length != 0, this
        index++;
    }
};
/**
 * Fixed version with do {} while() loop. This is somehow still worse than first algorithm.
 * if nums.length % k !== 0 the dowhile will swapp all values leading to swaps === nums.length 
 *   ( the loop will close as once the values have all been substituted, we'll get back to startIndex anyway)
 * if nums.length % k === 0 after returning to the initial index, the doWhile ends, we increase index
 *   and start swapping again
 */

let k = 2;
const num = [1, 2, 3, 4, 5, 6];
rotate(num, k);
console.log(num);
