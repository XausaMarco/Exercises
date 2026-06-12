/**
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let map = new Map();
    let count = 0;

    let i = 0;
    while (i < nums.length) {
        if (map.has(nums[i])) {
            if (map.get(nums[i]) === 2) nums.splice(i, 1);
            else {
                map.set(nums[i], 2);
                count++;
                i++;
            }
        } else {
            map.set(nums[i], 1);
            count++;
            i++;
        }
    }

    return count;
};
// This is inefficient, in the worst case it's an O(n²) and, using a map
// it's o(n) in space complexity. I can defenitely do better.

var removeDuplicates1 = function (nums) {
    let fast = 0;
    let slow = 0;
    let current = nums[fast];
    let dups = 0;

    while (fast < nums.length) {
        // Update current value
        if (nums[fast] !== current) {
            current = nums[fast];
            dups = 1;
        } else {
            dups++;
        }

        if (slow !== fast) {
            if (dups <= 2) {
                nums[slow++] = nums[fast];
            }
        } else {
            if (dups <= 2)
                slow++;
        }
        fast++;
    }

    return slow;
};

// Enhanced version using double indexes. This is O(n) in time and O(1) in space

var removeDuplicates = function(nums) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (slow < 2 || nums[fast] !== nums[slow - 2]) {
            nums[slow++] = nums[fast];
        }
    }
    return slow;
};
// By claude. Less readable, more efficient

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates1(nums));
console.log(nums);
