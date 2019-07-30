/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0];
  let max = sum;
  let n = nums.length;

  for (let i = 1; i < n; ++i) {
    sum = nums[i] + (sum > 0 ? sum : 0);
    max = Math.max(max, sum);
  }

  return max;
};
