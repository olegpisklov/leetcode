const find_missing_numbers = function(nums) {
    missingNumbers = [];
    
    let i = 0;
  
    while (i < nums.length) {
      const j = nums[i] - 1;
  
      if (nums[i] !== i + 1 && nums[j] !== j + 1) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      } else {
        ++i;
      }
    }
  
     // find the first number missing from its index, that will be our required number
    for (i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
      }
    }
  
    return missingNumbers;
  };
  