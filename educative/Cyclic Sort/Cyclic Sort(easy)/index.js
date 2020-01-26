const cyclic_sort = function(nums) {
    let i = 0;
  
    while (i < nums.length) {
      if (nums[i] !== i + 1) {
        const j = nums[i] - 1;
        [nums[i], nums[j]] = [nums[j], nums[i]]
      } else {
        ++i;
      }
    }
  
    return nums;
  }
  
  
  console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
  console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
  console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)
  