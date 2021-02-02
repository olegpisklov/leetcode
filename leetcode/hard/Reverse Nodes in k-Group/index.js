/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) { // [1,2,3,4,5], 2
    const root = new ListNode(null, head);
    let cur = head;
    let prev = root;
    
    while (cur) {
        let tail = cur;
        let i = 0;
        
        while (cur && i < k) {
            cur = cur.next;
            ++i;
        }

        if (i < k) {
            prev.next = tail;    
        } else {
            prev.next = reverse(tail, k); // [2,1], [4, 3]
            prev = tail;                  // 1,      3
        }
    }
    
    return root.next;
}

const reverse = (node, k) => {
    let prev = null;
    let cur = node;
    let i = 0;
    
    while (cur && k > i++) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    return prev;
}