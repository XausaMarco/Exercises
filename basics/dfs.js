/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Depth-First Search (In-Order Traversal)
 * Time Complexity: O(n) - Visit every node once
 * Space Complexity: O(h) - Where h is the height of the tree (call stack depth)
 * 
 * @param {TreeNode} root - The root of the binary tree
 * @returns {number[]} - An array of values in DFS (In-Order) order
 */

function depthFirstSearch(root) {
    const result = [];

    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        result.push(node);
        traverse(node.right);
    };

    traverse(root)
    return result;
}
