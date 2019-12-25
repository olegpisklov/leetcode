const pair_with_targetsum = (arr, target_sum) => {
    let startPointer = 0;
    let endPointer = arr.length - 1;
  
    while (startPointer != endPointer) {
      const sum = arr[startPointer] + arr[endPointer];
  
      if (sum > target_sum) {
        --endPointer;
      } else if (sum < target_sum) {
        ++startPointer;
      } else {
        return [startPointer, endPointer];
      }
    }
  }