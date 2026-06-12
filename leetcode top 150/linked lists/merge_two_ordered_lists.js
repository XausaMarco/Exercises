/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let dummy = {
    val: null,
    next: null,
  };
  let cursor = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      cursor.next = list1;
      list1 = list1.next;
    } else {
      cursor.next = list2;
      list2 = list2.next;
    }
    cursor = cursor.next;
  }

  cursor.next = list1 ? list1 : list2;

  return dummy.next;
};

// List 1: 1 → 3 → 5 → null
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));

// List 2: 2 → 3 → 6 → null
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let result = mergeTwoLists(list1, list2);

while (result != null) {
  console.log(result.val);
  result = result.next;
}
