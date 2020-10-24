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
    
    for (let i = 0; i < intervals.length; ++i) {
        const current = intervals[i];
        
        if (!result.length || result[result.length - 1][1] < current[0]) {
            result.push(current);
        } else {
            const last = result.length - 1;
            result[last][1] = Math.max(result[last][1], current[1]);
       }
    }   
    
    return result;
};

