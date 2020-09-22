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
var verticalTraversal = function(root) {
    const points = []; // {x, y, val}
    
    dfs(root, 0, 0, points);
    
    points.sort((a, b) => {
        // sort by X corrdinate (from left to right)
        if (a.x < b.x) {
            return -1;
        }
        if (a.x > b.x) {
            return 1;
        }
        // sort by Y corrdinate (from top to bottom)
        if (b.y < a.y) {
            return -1;
        }
        if (b.y > a.y) {
            return 1;
        }
        //sort by val
        return a.val - b.val;
    });
    
    const result = [];
    let valuesList = [];
    let currentX = points[0].x;

    for (let i = 0; i < points.length; ++i) {
        if (currentX === points[i].x) {
            valuesList.push(points[i].val);    
        } else {
            result.push(valuesList);
            valuesList = [points[i].val];
            currentX = points[i].x;
        }
    }
    
    if (valuesList.length) {
        result.push(valuesList);
    }
    
    return result;
};

const dfs = (node, x, y, points) => {
    if (!node) {
        return;
    }
    
    points.push({x, y, val: node.val});
    
    dfs(node.left, x - 1, y - 1, points);
    dfs(node.right, x + 1, y - 1, points);
}