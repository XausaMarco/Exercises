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
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let depthLeft = 0;
  let depthRight = 0;
  if (!root) return 0;
  if (root.left) {
    depthLeft = 1 + maxDepth(root.left);
  }
  if (root.right) {
    depthRight = 1 + maxDepth(root.right);
  }

  if (!root.left && !root.right) return 1;

  return depthLeft > depthRight ? depthLeft : depthRight;
};
