const find_corrupt_numbers = function(nums) {
    let result = [];
    let i = 0;
    let j;
  
    while (i < nums.length) {
      j = nums[i] - 1;
  
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        ++i;
      }
    }
  
    for (i = 0; i < nums.length; ++i) {
      if (nums[i] !== i + 1) {
        result = [nums[i], i + 1];
      }
    }
  
    return result;
  };
  