/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let p1 = reverse(slow);
    let p2 = head;
    
    while (p1) {
        if (p1.val !== p2.val) return false;
        
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return true;
};

const reverse = (list) => {
    let prev = null;
    let curr = list;
    
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}