/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Breadth-First Search (Level-Order Traversal)
 * Time Complexity: O(n) - where n is the number of nodes in the tree
 * Space Complexity: O(w) - where w is the maximum width of the tree (queue size)
 *
 * @param {TreeNode} root - The root of the binary tree
 * @returns {number[]} - An array of values in BFS order
 */
function bfs(root) {
    if (!root) return [];

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        result.push(currentNode);

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
}
