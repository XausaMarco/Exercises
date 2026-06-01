/**
 * Definition for a singly-linked list node.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Fast and Slow Pointers Base (Cycle Detection)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head - The head of the linked list
 * @returns {boolean} - True if a cycle exists, false otherwise
 */
function cycleDetection(head) {
    if (!head || !head.next) return false;

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) return true;
    }

    return false;
}
