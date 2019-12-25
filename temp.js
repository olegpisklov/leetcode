const make_squares = function(arr) {
    squares = new Array(arr.length);
    let start = 0;
    let end = arr.length - 1;
    let cur = arr.length - 1;
    while (cur >= 0) {
      const sqStart = arr[start] * arr[start];
      const sqEnd = arr[end] * arr[end];
      if (sqStart > sqEnd) {
        squares[cur] = sqStart;
        start++;
      } else {
        squares[cur] = sqEnd;
        end--;
      }
  
      cur--;
    }
  
  
    return squares;
  };