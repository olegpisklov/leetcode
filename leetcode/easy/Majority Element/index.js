/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counter = 1;
    let num = nums[0];
    
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] === num) {
            ++counter;
        } else {
            --counter;
            
            if (counter === 0) {
                num = nums[i];
                ++counter;
            }
        }
    }
    
    return num;
};