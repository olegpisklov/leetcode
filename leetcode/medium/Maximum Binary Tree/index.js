/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const stack = [];
    
    for (let i = 0; i < nums.length; ++i) {
        const node = new TreeNode(nums[i]);
        
        while (stack.length && stack[stack.length - 1].val < nums[i]) {
            node.left = stack.pop();
        }
        
        if (stack.length) {
            stack[stack.length - 1].right = node;
        }
        
        stack.push(node);
    }
    
    return stack[0];
}


var constructMaximumBinaryTree = function(nums) {
    if (!nums || !nums.length) {
        return null;
    }
    return helper(nums, 0, nums.length - 1);
};

const helper = (nums, left, right) => {
    if (left > right) {
        return null
    }
    
    let maxIndex = left;
    
    for (let i = left; i <= right; ++i) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }
    
    const node = new TreeNode(nums[maxIndex]);

    node.left = helper(nums, left, maxIndex - 1);
    node.right = helper(nums, maxIndex + 1, right);
    
    return node;
}