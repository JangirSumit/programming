//https://leetcode.com/problems/swap-nodes-in-pairs/

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
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let pointer = head;

  while (pointer && pointer.next) {
    let temp = pointer.val;
    pointer.val = pointer.next.val;
    pointer.next.val = temp;

    pointer = pointer.next.next;
  }

  return head;
};
