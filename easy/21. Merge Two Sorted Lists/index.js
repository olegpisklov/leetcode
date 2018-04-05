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
function mergeTwoLists(l1, l2) {
  if (!l1 && l2) {
    return l2;
  }

  if (l1 && !l2) {
    return l1;
  }

  const merge = function (l1, l2, result) {
    if (!l1 && !l2 ) {
      return result;
    }

    if (!l1 && l2) {
      return merge(null, l2.next, result.concat([l2.val]));
    }

    if (l1 && !l2) {
      return merge(l1.next, null, result.concat([l1.val]));
    }


    if (l1.val < l2.val) {
      return merge(l1.next, l2, result.concat([l1.val]));
    } else if (l1.val === l2.val) {
      return merge(l1.next, l2.next, result.concat([l1.val, l2.val]));
    } else {
      return merge(l1, l2.next, result.concat([l2.val]));
    }
  };

  return merge(l1, l2, []);
};