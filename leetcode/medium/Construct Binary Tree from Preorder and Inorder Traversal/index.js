/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return helper(preorder, inorder, 0, preorder.length - 1);
};

const helper = (preorder, inorder, inStart, inEnd) => {
    if (inStart > inEnd || !preorder.length) {
        return null;
    }
    
    const val = preorder.shift();
    const node = new TreeNode(val);
    
    let i = inStart;
    
    for (; i <= inEnd; ++i) {
        if (inorder[i] === val) break;
    }
    
    node.left = helper(preorder, inorder, inStart, i - 1);
    node.right = helper(preorder, inorder, i + 1, inEnd);
    
    return node;
}