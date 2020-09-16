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


var mergeTwoListsQ = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    const dummy = new ListNode(0);
    let cur = dummy;
    
    let pointer1 = l1;
    let pointer2 = l2;
        
    while (pointer1 && pointer2) {
        if (pointer1.val < pointer2.val) {
            cur.next = pointer1;
            pointer1 = pointer1.next;
        } else {
            cur.next = pointer2;
            pointer2 = pointer2.next;
        }
        cur = cur.next;
    }
    
    cur.next = pointer1 || pointer2;
    
    return dummy.next;
};

