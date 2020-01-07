const triplet_with_smaller_sum = function(arr, target) {
    let count = 0;
  
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length - 2; ++i) {
      let left = i + 1;
      let right = arr.length - 1;
  
      while (left < right) {
        let sum = arr[i] + arr[left] + arr[right];
  
        if (sum < target) {
          count += right - left;
          left += 1;
        } else {
          right -= 1; // we need a pair with a smaller sum
        }
      }
    }
  
    return count;
  };