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
 * https://leetcode.com/problems/path-sum/?envType=study-plan-v2&envId=top-interview-150
 * 
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if(!root) return false;
    if (!root.left && !root.right && root.val === targetSum) return true;
    const hasOnTheRight = hasPathSum(root.right, targetSum - root.val)
    const hasOnTheLeft = hasPathSum(root.left, targetSum - root.val)

    return hasOnTheRight || hasOnTheLeft;
};
/**
 * This algorithm is O(n), little room for improvement is possible without allocating the two variables
 * because if a valid path is found the second hasPathSum would not be executed
 * return hasPathSum(root.right, targetSum - root.val) || hasPathSum(root.left, targetSum - root.val);
 */
