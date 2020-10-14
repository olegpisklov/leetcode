/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (!intervals || !intervals.length) {
        return 0;
    }
    
	intervals.sort((a, b) => a[1] - b[1]);
	
	let counter = 0;
	let prevEndTime = intervals[0][1];

    for (let i = 1; i < intervals.length; ++i) {
		if (prevEndTime > intervals[i][0]) {
			++counter;
        } else {
            prevEndTime = intervals[i][1];
        }
    }

	return counter;
};