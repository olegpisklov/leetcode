const find_subsets = function(nums) {
    const subsets = [[]];
  
    for (let i = 0; i < nums.length; ++i) {
      const len = subsets.length;
  
      for (let k = 0; k < len; ++k) {
        const subset = [...subsets[k], nums[i]];
  
        subsets.push(subset);
      }
    }
  
    return subsets;
  };
  
  console.log('Here is the list of subsets: ');
  let result = find_subsets([1, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });
  
  console.log('Here is the list of subsets: ');
  result = find_subsets([1, 5, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });