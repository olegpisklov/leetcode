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
 * @return {number}
 */
var maxPathSum = function(root) {
    const sum = {max: Number.MIN_SAFE_INTEGER};
    
    helper(root, sum);
    
    return sum.max;
};

const helper = (node, sum) => {
    if (!node) return 0;
    
    const l = Math.max(helper(node.left, sum), 0);
    const r = Math.max(helper(node.right, sum), 0);

    const currentSum = node.val + l + r;
    
    sum.max = Math.max(sum.max, currentSum);
    
    return Math.max(l, r) + node.val;
}