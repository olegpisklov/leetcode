/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s) {
        return false;
    }
    
    if (!isEqual(s, t)) {
        return isSubtree(s.left, t) || isSubtree(s.right, t);
    }
    
    return true;
};

const isEqual = (t1, t2) => {
    if (!t1 && !t2) {
        return true;
    }
    
    if (!t1 || !t2) {
        return false;
    }
    
    return t1.val === t2.val && isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right);
}