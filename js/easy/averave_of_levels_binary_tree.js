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
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

var averageOfLevels = function (root) {
    let ret = [];
    let count = [];

    const sum = (root, level) => {
        if (!root) return 0;
        ret[level] = (ret[level] || 0) + root.val;
        count[level] = (count[level] || 0) + 1;
        sum(root.left, level + 1);
        sum(root.right, level + 1);
    };

    sum(root, 0);
    for (let i = 0; i < ret.length; i++) {
        ret[i] = ret[i] / count[i];
    }
    return ret;
};
// This is an O(n) + O(logn) = O(n) where n is the number of elements in the tree

//BFT version (seems slower at least with the )
var averageOfLevelsBFT = function (root) {
    const queue = [root];
    const ret = [];

    while (queue.length) {
        const size = queue.length;
        let sum = 0;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        ret.push(sum / size);
    }

    return ret;
};
