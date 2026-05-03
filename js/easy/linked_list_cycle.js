/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false;
    const map = {};

    while (head.next) {
        if (map[head.next]) return true;
        else map[head.next] = true;
        head = head.next;
    }

    return false;
};
// This approach doesn't work, all map beys would be "[object Object]"
// a set is needed. Moreover it would miss loops in the last node (head.next===null)

var hasCycle1 = function (head) {
    const set = new Set();

    while (head) {
        if (set.has(head)) return true;
        else set.set(head);
        head = head;
    }

    return false;
};
// This algorithm runs quite well, it's an O(n) but isn't performing well memory-wise
// with respect to other solutions it's indeed an O(n) space complexity.

var hasCycle2 = function (head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true;
    }

    return false;
};
// This uses the floyd's cycle detection algorithm, it's O(n) in time but O(1) in space

var hasCycle3 = function (head) {
    if (head === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// This is the leetcode solution for the cycle detection
// Break the loop when slow === fast instead of when fast reaches the end
