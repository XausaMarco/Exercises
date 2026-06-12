/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let minDiff = Infinity;
    let inorder = function (cursor, value) {
        inorder(cursor.left, cursor.val);
        if (value) minDiff = Math.min(minDiff, value - cursor.val); // prob: on the right branch we get a negative number
        inorder(cursor.right);
    };
    inorder(root, null);
    return minDiff;
};
// This algorithm starts from the fact that in an inorder traversal
// the minimum difference must be between adiacent values
// Therefore, the idea is to perform an inorder traversal and simply
// store the difference at each step

var getMinimumDifference1 = function (root) {
    let minDiff = Infinity;
    let previousVal;
    let inorder = function (cursor) {
        if (!cursor) return;
        inorder(cursor.left);
        if (previousVal) minDiff = Math.min(minDiff, cursor.val - previousVal);
        previousVal = cursor.val;
        inorder(cursor.right);
    };
    inorder(root, null);
    return minDiff;
};
// In this way, the tree is crossed inorder. 
// Considering [4,2,6,1,3], previousVal is set only when the node 
// 1 is reached, hence for left branches the cursor.val-previousVal will always be true.
// Setting previousVal = cursor.val before going through the left branch is done 
// to avoid negative differences, as previousVal < cursor.right
