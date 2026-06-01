/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  let root = new TreeNode(nums[Math.trunc(nums.length / 2)]);
  let cursor;

  let i = Math.trunc(nums.length / 2) - 1;
  cursor = root;
  while (i >= 0) {
    cursor.left = new TreeNode(nums[i]);
    cursor = cursor.left;
    i--;
  }

  let j = Math.trunc(nums.length / 2) + 1;
  cursor = root;
  while (j <= nums.length - 1) {
    cursor.right = new TreeNode(nums[j]);
    cursor = cursor.right;
    j++;
  }

  return root;
};

var sortedArrayToBST = function (nums) {
  if (!nums) return null;
  const half = Math.trunc(nums.length / 2);
  return new TreeNode(
    nums[half],
    sortedArrayToBST(nums.slice(0, half)),
    sortedArrayToBST(nums.slice(half + 1, nums.length)),
  );
};

var sortedArrayToBST = function(nums) {
    // Time complexity analysis:
    // - Without slice: O(n) — we visit every node once at O(1) each.
    //   Not O(logn) because we recurse into both branches, not just one.
    // - With slice: O(n logn) — each level sums to O(n) total slice work
    //   (more nodes but smaller slices, doubling and halving cancel out),
    //   and there are O(logn) levels.
    //   Not O(n²) because each node slices its own subarray, not the full array,
    //   so most nodes do much less than O(n) work.
    // Space: O(logn) — call stack depth only, no array copies.
    const build = (lo, hi) => {
        if (lo > hi) return null;
        const mid = Math.trunc((lo + hi) / 2);
        return new TreeNode(
            nums[mid],
            build(lo, mid - 1),
            build(mid + 1, hi)
        );
    };
    return build(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
