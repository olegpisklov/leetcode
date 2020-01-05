const triplet_sum_close_to_target = function(arr, target_sum) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
  
    for (let i = 0; i < arr.length - 2; ++i) {
      let left = i + 1;
      let right = arr.length - 1;
  
      while (left < right) {
        let currentDiff = target_sum - arr[i] - arr[left] - arr[right];
  
        minDiff = Math.min(Math.abs(currentDiff), minDiff);
  
        if (minDiff === 0) {
          return target_sum;
        }
  
        if (currentDiff > 0) {
          ++left;
        } else {
          --right;
        }
      }
    }
  
    return target_sum - minDiff;
  };
  