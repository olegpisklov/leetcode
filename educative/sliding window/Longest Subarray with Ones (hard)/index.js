const length_of_longest_substring = function(arr, k) {
    let maxLength = 0;
    let maxFrequency = 0;
    let windowStart = 0;
  
    for (let i = 0; i < arr.length; ++i) {
        maxFrequency += arr[i];
    
        if (i - windowStart + 1 - maxFrequency > k) {
            maxFrequency -= arr[windowStart];
            windowStart += 1;
        }
    
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
  
    return maxLength;
  };
  