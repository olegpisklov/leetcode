/**
 * @param {number[]} nums
 * @return {number}
 */
var robDp = function(nums) {
    if (!nums.length) {
        return 0;
    }
    
    const memo = new Array(nums.length);
    
    memo.fill(-1);
    
    memo[0] = nums[0];
    memo[1] = Math.max(nums[0], nums[1]);
    
    return helper(nums, nums.length - 1, memo);
};

const helper = (nums, i, memo) => {
    if (memo[i] !== -1) {
        return memo[i];
    }
    
    const res = Math.max(helper(nums, i - 2, memo) + nums[i], helper(nums, i - 1, memo));
    
    memo[i] = res;
    
    return res;
}

var rob = function(nums) {
    if (!nums.length) {
        return 0;
    }
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    
    let prevPrev = nums[0];
    let prev = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; ++i) {
        const temp = prev
        prev = Math.max(prevPrev + nums[i], prev);
        prevPrev = temp;
    }
    
    return prev;
};

