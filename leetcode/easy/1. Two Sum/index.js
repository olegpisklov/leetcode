/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumBrut = function(nums, target) {
  for (let i = 0; i < nums.length; ++i) {        
      for (let j = i + 1; j < nums.length; ++j) {
          if (nums[j] === target - nums[i]) {
              return [i, j];
          }
      }
  }
};

var twoSum = function(nums, target) {
  const map = {};
  
  for (let i = 0; i < nums.length; ++i) {        
      if (map[nums[i]] !== undefined) {
          return [map[nums[i]], i];
      }
      map[target - nums[i]] = i;
  }
};