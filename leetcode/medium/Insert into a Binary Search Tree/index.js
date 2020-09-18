/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root === null) {
        return new TreeNode(val);
    }
    
    let cur = root;
    
    while (cur.val !== val) {
        if (cur.val > val) {
            // go left
            if (cur.left === null) {
                cur.left = new TreeNode(val);
            }
            cur = cur.left;
            
        } else {
            // go right
            if (cur.right === null) {
                cur.right = new TreeNode(val);
            }
            cur = cur.right;
        }
    }
    
    return root;
};