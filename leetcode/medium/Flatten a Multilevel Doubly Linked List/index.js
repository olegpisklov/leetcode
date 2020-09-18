/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let current = head;
    
    while (current) {
        if (current.child) {
            let lastChild = current.child;
            const next = current.next;
            
            while (lastChild.next) {
                lastChild = lastChild.next;
            }
            
            // connect current node with child
            current.next = current.child;
            current.child.prev = current;
            
            // connect last child with current node next
            if (next) {
                lastChild.next = next;
                next.prev = lastChild;
            }
            
            current.child = null;
        }
        
        current = current.next;
    }
    
    return head;
};