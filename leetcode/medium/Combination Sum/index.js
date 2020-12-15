/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    
    helper(candidates, target , 0, 0, res, []);
    
    return res;
};

const helper = (nums, target, start, sum, res, comb) => {    
    if (sum === target) {
        res.push([...comb]);
        return;
    }
    if (sum > target) {
        return;
    }
    
    for (let i = start; i < nums.length; ++i) {
        comb.push(nums[i]);
        helper(nums, target, i, sum + nums[i] , res, comb);
        comb.pop();
    }
}