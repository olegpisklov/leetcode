/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) { // O(1) space
    let cur = root;
    
    while (cur !== null) {
        if (cur.val > p.val && cur.val > q.val) {
            cur = cur.left;
        } else if (cur.val < p.val && cur.val < q.val) {
            cur = cur.right;
        } else {
            return cur;
        }
    }
    
    return null;
}

var lowestCommonAncestorOld = function(root, p, q) { // O(n) space
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};
