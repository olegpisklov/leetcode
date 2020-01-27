const find_missing_number = function(nums) {
    let i = 0;
  
    while (i < nums.length) {
      if (nums[i] !== i && nums[i] < nums.length) {
        const j = nums[i];
        [nums[i], nums[j]] = [nums[j], nums[i]]
      } else {
        ++i;
      }
    }
  
      // find the first number missing from its index, that will be our required number
    for (i = 0; i < nums.length; i++) {
      if (nums[i] !== i) {
        return i;
      }
    }
  
    return n;
  };
  