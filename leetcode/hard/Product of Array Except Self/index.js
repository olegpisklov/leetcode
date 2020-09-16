/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const l = new Array(n);
    const r = new Array(n);
    const answer = new Array(n);
    
    l[0] = 1;
    r[n - 1] = 1;
    
    for (let i = 1; i < n; ++i) {
        l[i] = nums[i - 1] * l[i - 1];
    }
    
    for (let i = n - 2; i >= 0; --i) {
        r[i] = nums[i + 1] * r[i + 1];
    }
    
    for (let i = 0; i < n; ++i) {
        answer[i] = l[i] * r[i];
    }
    
    return answer;
    
};