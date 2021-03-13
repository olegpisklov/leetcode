/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function(nums) { // O(n)
    let first = Number.MAX_SAFE_INTEGER; // fist lower bound
    let second = Number.MAX_SAFE_INTEGER; // second lower bound
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] <= first) {
            first = nums[i];
        } else if (nums[i] <= second) {
            second = nums[i];
        } else {
            return true;
        }
    }
    
    return false;
}

var increasingTripletQ = function(nums) { // O(n^2)
    const d = new Array(nums.length).fill(1);
    
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j] && d[i] < d[j] + 1) {
                d[i] = d[j] + 1;
            }
        }
        if (d[i] === 3) {
            return true;
        }    
    }

    return false;
};