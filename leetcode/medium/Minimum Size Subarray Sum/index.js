/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let sum = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    
    let j = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        
        while (sum >= s) {
            minLen = Math.min(minLen, i - j + 1);
            sum -= nums[j++];
        }
    }
    
    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};