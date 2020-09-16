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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    helper(root, result, 0);
    return result;
};

const helper = (node, result, level) => {
    if (!node) {
        return;
    }
    
    if (!result[level]) {
        result.push([]);
    }
    
    helper(node.left, result, level + 1);
    helper(node.right, result, level + 1);
    
    result[level].push(node.val);
}