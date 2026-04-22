/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Don't understand why i am not achieving better execution time
var deleteDuplicates = function (head) {
  const first = head;
  while (head && head.next) {
    if (head.next.val === head.val) head.next = head.next.next;
    else head = head.next;
  }

  return first;
};
