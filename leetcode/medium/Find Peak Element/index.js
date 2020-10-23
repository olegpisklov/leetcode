/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        const middle = Math.floor((start + end) / 2);

        if (nums[middle] > nums[middle + 1]) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }
    
    return start;
}

var findPeakElementMy = function(nums) {
    if (!nums || !nums.length) {
        return null;
    }
    if (nums.length === 1 || nums[0] > nums[1]) {
        return 0
    }
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1;
    }
    
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const middle = Math.floor((start + end) / 2); // TODO: deal with int overflow
        
        if (nums[middle] > nums[middle - 1] && nums[middle] > nums[middle + 1]) {
            return middle;
        } else if (nums[middle] < nums[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    
    return -1
};