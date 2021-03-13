/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const d = new Array(nums.length).fill(1);
    const counts = new Array(nums.length).fill(1);
    let maxLen = 1;
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                if (d[i] < d[j] + 1) {
                    d[i] = d[j] + 1;    
                    counts[i] = counts[j];
                } else if (d[i] === d[j] + 1) {
                    counts[i] += counts[j];
                }
            }
        }
        
        maxLen = Math.max(maxLen, d[i]);
    }
    
    let res = 0;

    for (let i = 0; i < d.length; ++i) {
        if (d[i] === maxLen) {
            res += counts[i];
        }
    }
    
    return res;
};