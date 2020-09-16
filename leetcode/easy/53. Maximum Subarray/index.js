/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayBrut = function(nums) {
  let result = Number.MIN_SAFE_INTEGER;
  
  for (let i = 0; i < nums.length; ++i) {
      let sum = 0;
      
      for (let j = i; j < nums.length; ++j) {
          sum += nums[j];
          
          if (sum > result) {
              result = sum;
          }
      }    
  }
  
  return result;
};

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
