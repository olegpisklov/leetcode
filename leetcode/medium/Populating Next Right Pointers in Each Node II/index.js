/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connectBFS = function(root) {
    if (!root) return root;
    
    const q = [];
    
    q.push(root);
    
    while(q.length) {
        const len = q.length;
        
        for (let i = 0; i < len; ++i) {
            const node = q.shift();
            
            if (i + 1 < len) {
                node.next = q[0];
            }
            
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);   
            }
        }
    }
    
    return root;
};

var connect = function(root) {
    if (!root) return root;
    
    // leftmost node of the current level, starts with root,
    // we will iterate level by level
    let leftmost = root; 
    
    while (leftmost) {
        let currentLevelPointer = leftmost;
        // while iterating through the current level, we will connect next level nodes
        let nextLevelPointer = null; 
        
        // reset leftmost, we will set it later for the next iteration
        leftmost = null; 
        
        while (currentLevelPointer) {
            // can be moved to a separate func if we use global vars
            if (currentLevelPointer.left) {
                if (!nextLevelPointer) {
                    leftmost = currentLevelPointer.left;
                } else {
                    nextLevelPointer.next = currentLevelPointer.left;
                }
                
                nextLevelPointer = currentLevelPointer.left;
            }
            
            if (currentLevelPointer.right) {
                if (!nextLevelPointer) {
                    leftmost = currentLevelPointer.right;
                } else {
                    nextLevelPointer.next = currentLevelPointer.right;
                }
                
                nextLevelPointer = currentLevelPointer.right;
            }
            
            currentLevelPointer = currentLevelPointer.next;
        }
    }
    
    return root;
}