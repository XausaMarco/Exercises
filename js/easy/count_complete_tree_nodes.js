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
 * https://leetcode.com/problems/count-complete-tree-nodes/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  let sum =0;
  if (root.left || (!root.left && !root.right))
    sum = 1 + countNodes(root.left) 
    sum = root.right? countNodes(root.right):0;
  return sum;
};
// this is O(n), RATHER SLOW


// This is the best version, O(logn), use a getDepth function that counts only the nodes on the extreme left
// The idea is to count the length of both right and left, and if they're the same that means u only need to get the depth of the
// subtree on the right
var countNodes = function(root) {
  if (!root) return 0;

  const getDepth = (node) => {
    let depth = 0;
    while (node) {
      node = node.left;
      depth++;
    }
    return depth;
  };

  let leftDepth = getDepth(root.left);
  let rightDepth = getDepth(root.right);

  if (leftDepth === rightDepth) {
    return (1 << leftDepth) + countNodes(root.right);
  } else {
    return (1 << rightDepth) + countNodes(root.left);
  }
};