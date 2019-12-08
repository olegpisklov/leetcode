const smallest_subarray_with_given_sum = function(s, arr) {
    let sum = 0;
    let minLength = arr.length;
    let start = 0;
  
    for (let i = 0; i < arr.length; ++i) {
      sum += arr[i];
  
      while (sum >= s) {
        minLength = Math.min(minLength, i + 1 - start);
        sum -= arr[start];
        start++;
      }
    }
  
    if (minLength === arr.length) {
      return 0;
    }
  
    return minLength;
  };
  