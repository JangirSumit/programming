//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next == null && n > 0) {
    head = null;
    return head;
  }

  let length = 0;
  let pointer = head;

  while (pointer != null) {
    length++;
    pointer = pointer.next;
  }

  let positionToDelete = length - n;
  pointer = head;
  let current = 0;

  if (positionToDelete == 0) {
    head = head.next;
    return head;
  }

  while (pointer != null) {
    console.log(current, pointer, pointer.next);
    if (pointer.next == null) {
      pointer = null;
      console.log(current, pointer, head);

      break;
    }

    if (current + 1 == positionToDelete) {
      let temp = pointer.next;
      pointer.next = pointer.next.next;
      temp.next = null;
      break;
    }

    current++;
    pointer = pointer.next;
  }

  return head;
};

var removeNthFromEndUsingQueue = function (head, n) {
  if (head.next == null && n > 0) {
    head = null;
    return head;
  }

  let list = [];
  let pointer = head;

  while (pointer != null) {
    list.push(pointer.val);
    pointer = pointer.next;
  }

  list.splice(-n, 1);
  let newList = null;
  pointer = null;

  while (list.length) {
    let newNode = new ListNode(list.shift());

    if (newList == null) {
      newList = newNode;
      pointer = newNode;
    } else {
      pointer.next = newNode;
      pointer = pointer.next;
    }
  }

  return newList;
};
