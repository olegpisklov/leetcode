/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length && nums[i] <= 0; ++i) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const target = nums[i] + nums[left] + nums[right];
            
            if (target < 0) {
                ++left;
            } else if (target > 0) {
                --right;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                --right;
                ++left;
                while (nums[left] === nums[left - 1]) {
                   ++left;
                }
            }
        }
    }
    
    return res;
};