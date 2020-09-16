/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals || !intervals.length || intervals.length === 1) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result  = [];
    let prev = intervals[0];
    
    for (let i = 1; i < intervals.length; ++i) {
        const current = intervals[i];

        if (prev[1] >= current[0]) {
            prev = [Math.min(prev[0], current[0]), Math.max(prev[1], current[1])];
        } else {
            result.push(prev);
            prev = current;
        }
    }   
    
    result.push(prev);
    
    return result;
};

