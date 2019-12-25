const make_squares = function(arr) {
    const n = arr.length;
    const squares = Array(n).fill(0);
    let start = 0;
    let end = n - 1;
    let index = n - 1;
  
    
    while (start < end) {
      if (Math.pow(arr[start], 2) > Math.pow(arr[end], 2)) {
        squares[index] = Math.pow(arr[start], 2);
        ++start;
      } else {
        squares[index] = Math.pow(arr[end], 2);
        --end;
      }
  
      --index;
    }
    
    return squares;
  };
  