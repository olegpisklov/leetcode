/**
 * @param {number[]} nums
 * @return {number}
 */

// create piles
//
// [0,3,1,6,2,2,7]
// 0 3 6 7
// 1 2
//   2

var lengthOfLIS = function(nums) { // O(n*log(n))
    const piles = [];
    
    for (let i = 0; i < nums.length; ++i) {
        if (!piles.length || piles[piles.length - 1] < nums[i]) {
            piles.push(nums[i]);
            continue;
        }
        
        const ind = search(piles, nums[i]);
        
        piles[ind] = nums[i];
    }
    
    return piles.length;
}

const search = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        const middle = Math.floor((left + right) / 2);
        
        if (arr[middle] === num) {
            return middle;
        } else if (arr[middle] > num) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    
    return left;
}



var lengthOfLISdp = function(nums) { // O(n^2)
    const dp = new Array(nums.length).fill(1);
    let maxLen = 1;
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[j] < nums[i] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }
    
    return maxLen;
}



var lengthOfLIStimeOut = function(nums) { // O(2^n)
    return helper(nums, Number.MIN_SAFE_INTEGER, 0);
};

const helper = (nums, prev, index) => {
    if (index === nums.length) {
        return 0;
    }
    
    let res1 = 0;
    
    if (nums[index] > prev) {
        res1 = 1 + helper(nums, nums[index], index + 1);
    }
    
    const res2 = helper(nums, prev, index + 1);
    
    return Math.max(res1, res2);
    
}