const max_sub_array_of_size_k = function(k, arr) {
    let start = 0;
    let sum = 0;
    let maxSum = 0;
  
    for (let i = 0; i < arr.length - 1; ++i) {
      sum += arr[i];
  
      if (start + k === i + 1) {
        maxSum = Math.max(maxSum, sum);
        sum -= arr[start];
        start += 1;
      }
    }
  
    return maxSum;
  };