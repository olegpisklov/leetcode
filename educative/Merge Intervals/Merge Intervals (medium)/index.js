class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    get_interval() {
      return "[" + this.start + ", " + this.end + "]";
    }
  }
  
  
  const merge = function(intervals) {
    const merged = []
    const sorted = intervals.sort((a, b) => a.start - b.start);
    let start = sorted[0].start;
    let end = sorted[0].end;
  
    for (let i = 1; i < sorted.length; ++ i) {
      const currentInterval = sorted[i];
  
      if (end > currentInterval.start) {
        end = Math.max(end, currentInterval.end);
      } else {
        merged.push(new Interval(start, end));
        start = currentInterval.start;
        end = currentInterval.end;
      }
    }
  
    merged.push(new Interval(start, end));
  
    return merged;
  };
  
  merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
  result = "";
  for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
  }
  console.log(`Merged intervals: ${result}`)
  
  
  merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
  result = "";
  for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
  }
  console.log(`Merged intervals: ${result}`)
  
  
  merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
  result = "";
  for(i=0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
  }
  console.log(`Merged intervals: ${result}`)
  