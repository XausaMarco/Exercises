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
 * https://leetcode.com/problems/symmetric-tree/
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let checkSimmetry = (left, right) => {
    if (!left) return !right;
    if (!right) return !left;
    if (left.val !== right.val) return false;

    return (
      checkSimmetry(left.left, right.right) &&
      checkSimmetry(left.right, right.left)
    );
  };

  return checkSimmetry(root.left, root.right);
};
