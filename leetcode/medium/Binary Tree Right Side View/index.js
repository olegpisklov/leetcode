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
 * @return {number[]}
 */
var rightSideView = function(root) { // DFS
    if (!root) {
        return [];
    }
    
    const result = [];
    
    dfs(root, result, 0);
    
    return result;
}

const dfs = (node, res, level) => { 
    if (!node) {
        return;
    }
    
    if (level === res.length) {
        res.push(node.val);
    }
    
    dfs(node.right, res, level + 1);
    dfs(node.left, res, level + 1);
}

var rightSideViewMy = function(root) { // BFS
    if (!root) {
        return [];
    }
    
    const q = [root];
    const result = [];
    
    while (q.length) {
        const len = q.length;
        
        for (let i = 0; i < len; ++i) {
            const node = q.shift();
            
            if (i === len - 1) {
                result.push(node.val);
            }
            
            if (node.left) {
                q.push(node.left);
            }
            
            if (node.right) {
                q.push(node.right);
            }
        }
    }
    
    return result;
};