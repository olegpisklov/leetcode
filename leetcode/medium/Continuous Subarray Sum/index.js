/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
10 % 10 -> 0
11 % 10 -> 1
12 % 10 -> 2
13 % 10 -> 3
.....
23 % 10 -> 3
*/
var checkSubarraySum = function(nums, k) {
    let currentSum = 0;
    const map = {0: -1};
    
    for (let i = 0; i < nums.length; ++i) {
        currentSum += nums[i];
        
        const mod = k === 0 ? currentSum : currentSum % k; // k = 0 is a special case
        
        if (map[mod] !== undefined) {
            if (i - map[mod] > 1)
                return true;
        } else {
            map[mod] = i; // save only the first occuring index, so the diff is bigger   
        }
    }
    
    return false;
};

