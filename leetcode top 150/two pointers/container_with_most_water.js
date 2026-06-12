/**
 *
 * https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let maxArea = 0;

    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const lowerBound =
            height[left] >= height[right] ? height[right] : height[left];
        const area = (right - left) * lowerBound;

        if (area > maxArea) maxArea = area;

        if (height[left] >= height[right]) right--;
        else left++;
    }

    return maxArea;
};
/**
 * time complexity is O(n)
 * space complexity is O(1)
 */
