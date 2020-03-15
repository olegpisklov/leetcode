function find_single_numbers(nums) {
    let n1xn2 = 0;
  
    for (let i = 0; i < nums.length; ++ i) {
      n1xn2 ^= nums[i];
    }
  
    let rightMostOneBitIndex = 0;
    while ((n1xn2 & (1 << rightMostOneBitIndex)) === 0) {
      ++rightMostOneBitIndex;
    }
  
    let numOne = 0;
    let numTwo = 0;
  
    for (let i = 0; i < nums.length; ++ i) {
      if ((nums[i] & (1 << rightMostOneBitIndex)) === 0) {
        numOne ^= nums[i];
      } else {
        numTwo ^= nums[i];
      }
    }
  
    return [numOne, numTwo];
  }
  
  console.log(`Single numbers are: ${find_single_numbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])}`);
  console.log(`Single numbers are: ${find_single_numbers([2, 1, 3, 2])}`);