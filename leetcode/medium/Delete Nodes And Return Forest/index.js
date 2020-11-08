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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    if (!root) {
        return [];
    }
    
    const res = [];
    const deleteSet = new Set();
    
    for (let i = 0; i < to_delete.length; ++i) {
        deleteSet.add(to_delete[i]);
    }
    
    if (!deleteSet.has(root.val)) {
        res.push(root);
    }
    
    helper(root, deleteSet, res);
    
    return res;
};

const helper = (node, deleteSet, res) => {
    if (!node) {
        return null;
    }
    
    node.left = helper(node.left, deleteSet, res);
    node.right = helper(node.right, deleteSet, res);
    
    if (!deleteSet.has(node.val)) {
        return node;
    }
    if (node.left) {
        res.push(node.left);
    }
    if (node.right) {
        res.push(node.right);
    }

    return null;
}