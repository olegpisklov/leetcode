const dutch_flag_sort = function(arr) {
    let start = 0;
    let end = arr.length - 1;
    let i = 0;
  
    while (i <= end) {
      if (arr[i] === 0) {
        [arr[i], arr[start]] = [arr[start], arr[i]];
        ++start;
        ++i;
      } else if (arr[i] === 2) {
        [arr[i], arr[end]] = [arr[end], arr[i]];
        --end;
      } else {
        ++i;
      }
    }
  
    return arr;
  };
  