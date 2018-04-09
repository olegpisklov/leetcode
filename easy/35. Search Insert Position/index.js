/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (target === 0) {
    return 0;
  }

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] >= target && (nums[i - 1] < target || i === 0)) {
      return i;
    }
  }

  return nums.length;
};