/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    
    helper(nums, 0, res);
    
    return res;
};

const helper = (nums, start, res) => {
    if (start === nums.length) {
        res.push([...nums]);
        return;
    }
    
    for (let i = start; i < nums.length; ++i) {
        [nums[i], nums[start]] = [nums[start], nums[i]];
        helper(nums, start + 1, res);
        [nums[i], nums[start]] = [nums[start], nums[i]];
    }
}