//https://leetcode.com/problems/merge-two-sorted-lists/

/**
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
var mergeTwoLists = function (list1, list2) {
  let newList = null;
  let pointer = null;

  while (list1 && list2) {
    console.log(newList, list1, list2, pointer);

    if (list1.val >= list2.val) {
      if (newList == null) {
        newList = new ListNode(list2.val);
        pointer = newList;
      } else {
        pointer.next = new ListNode(list2.val);
        pointer = pointer.next;
      }

      list2 = list2.next;
    } else if (list2.val >= list1.val) {
      if (newList == null) {
        newList = new ListNode(list1.val);
        pointer = newList;
      } else {
        pointer.next = new ListNode(list1.val);
        pointer = pointer.next;
      }

      list1 = list1.next;
    }
  }

  if (list1 == null && list2 != null) {
    if (newList == null) {
      newList = list2;
    } else {
      pointer.next = list2;
    }
  } else if (list1 != null && list2 == null) {
    if (newList == null) {
      newList = list1;
    } else {
      pointer.next = list1;
    }
  }

  return newList;
};
