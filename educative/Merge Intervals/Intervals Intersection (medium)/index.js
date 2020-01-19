const merge = function(intervals_a, intervals_b) {
    const result = [];
    
    for (let i = 0; i < intervals_a.length; ++i) {
      const intervalA = intervals_a[i];
  
      for (let j = 0; j < intervals_b.length; ++j) {
        const intervalB = intervals_b[j];
  
        if (intervalA[1] >= intervalB[0] && intervalA[0] <= intervalB[0] ||
            intervalB[1] >= intervalA[0] && intervalB[0] <= intervalA[0]) {
          result.push([
            Math.max(intervalA[0], intervalB[0]),
            Math.min(intervalA[1], intervalB[1])
          ]);
        }
      } 
    }
  
    return result;
  };
  
  merged_intervals = merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]);
  result = "";
  for(i=0; i < merged_intervals.length; i++)
    result += "[" + merged_intervals[i][0] + ", " + merged_intervals[i][1] + "] ";
  console.log("Intervals Intersection: " + result);
  
  merged_intervals = merge([[1, 3], [5, 7], [9, 12]], [[5, 10]]);
  result = "";
  for(i=0; i < merged_intervals.length; i++)
    result += "[" + merged_intervals[i][0] + ", " + merged_intervals[i][1] + "] ";
  console.log("Intervals Intersection: " + result);
  
  