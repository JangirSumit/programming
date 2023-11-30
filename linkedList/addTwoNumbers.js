//https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stackedList = (head) => {
    let stack = [];

    while (head != null) {
      stack.push(head.val);
      head = head.next;
    }

    return stack;
  };

  let newL1 = stackedList(l1);
  let newL2 = stackedList(l2);
  let newList = null;
  let pointer = null;
  let reminder = 0;

  while (newL1.length || newL2.length || reminder > 0) {
    let temp1 = newL1.length ? newL1.shift() : 0;
    let temp2 = newL2.length ? newL2.shift() : 0;

    let result = reminder + temp1 + temp2;

    if (result > 10) {
      reminder = 1;
      result = result - 10;
    } else {
      reminder = 0;
    }

    let newNode = new ListNode(result);

    if (pointer) {
      pointer.next = newNode;
      pointer = pointer.next;
    } else {
      newList = newNode;
      pointer = newList;
    }
  }
};
