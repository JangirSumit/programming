//https://leetcode.com/problems/reverse-linked-list/description/

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
var reverseList = function (head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
};

var reverseList = function (head) {
    let stack = [];

    while (head != null) {
        stack.push(head.val);
        head = head.next;
    }

    let newList = null;
    let headNode = null;

    while (stack.length) {
        let node = new ListNode(stack.pop());

        if (newList) {
            headNode.next = node;
            headNode = headNode.next;
        } else {
            newList = node;
            headNode = newList;
        }
    }

    return newList;
};