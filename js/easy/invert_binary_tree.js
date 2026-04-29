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
 * https://leetcode.com/problems/invert-binary-tree/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
const tmp = {
  val: 4,
  left: {
    val: 7,
    left: { val: 9, left: undefined, right: undefined },
    right: { val: 6, left: undefined, right: undefined },
  },
  right: {
    val: 2,
    left: { val: 3, left: undefined, right: undefined },
    right: { val: 1, left: undefined, right: undefined },
  },
};
*/
var invertTree = function (root) {
  if (!root) return null; //watch out to always return null in these cases, undefined would be wrong
  const sup = root.right;

  root.right = invertTree(root.left);
  root.left = invertTree(sup);

  return root;
};

//This is an O(n) because the swap is executed in each node of the tree (or does the return null for leaves)
