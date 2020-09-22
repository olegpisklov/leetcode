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
var addTwoNumbers = function(l1, l2) {
    const rev1 = reverse(l1);
    const rev2 = reverse(l2);
    
    let p1 = rev1;
    let p2 = rev2;
    
    let resHead = new ListNode(null);
    let resPointer = resHead;
    let carry = 0;
    
    while (p1 || p2) {
        const val1 = p1 ? p1.val : 0;
        const val2 = p2 ? p2.val : 0;
        const sum = val1 + val2 + carry;
        const node = new ListNode(sum % 10);
        
        carry = sum >= 10 ? 1 : 0;
        
        resPointer.next = node;
        resPointer = node;
        
        p1 = p1 ? p1.next : null;
        p2 = p2 ? p2.next : null;
    }
    
    if (carry) {
        resPointer.next = new ListNode(1);
    }

    return reverse(resHead.next);
};

const reverse = (node) => {
    let prev = null;
    let cur = node;
    
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    return prev;
}