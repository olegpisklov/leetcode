/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode();
  let list = head;
  let carry = 0;

  while (l1 || l2) {
    const node = new ListNode();

    node.val = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;

    if (node.val >= 10) {
      node.val = node.val % 10;
      carry = 1;
    } else {
      carry = 0;
    }

    list.next = node;
    list = list.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  if (carry) {
    list.next = new ListNode(carry);
  }

  return head.next;
};