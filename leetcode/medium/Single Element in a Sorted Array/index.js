/**
 * @param {number[]} nums
 * @return {number}
 */
//            ^
// [1,1,2,3,3,4,4,8,8]

var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const middle = Math.floor((end - start) / 2 + start);
        
        if (middle % 2 === 0) {
            if (nums[middle] !== nums[middle + 1]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        } else {
            if (nums[middle] !== nums[middle - 1]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
    }
    
    return nums[start];
};