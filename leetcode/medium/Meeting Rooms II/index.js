/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const heap = new Heap();

    for (let i = 0; i < intervals.length; ++i) {
        if (!heap.isEmpty() && heap.peek()[1] <= intervals[i][0]) {
            heap.pop();
        } 
            
        heap.add(intervals[i]);
    }

    return heap.length;
}

class MinHeap {
    add() {}
    pop() {}
    peek() {}
    isEmpty() {}
}























var minMeetingRoomsM = function(intervals) {
    if (!intervals || !intervals.length) {
        return 0;   
    }
    
    const starts = new Array(intervals.length);
    const ends = new Array(intervals.length);

    for (let i = 0; i < intervals.length; ++i) {
        starts[i] = intervals[i][0];
        ends[i] = intervals[i][1];
    }
    
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let rooms = 0;
    let endPointer = 0;
    
    for (let i = 0; i < starts.length; ++i) {
        if (starts[i] < ends[endPointer]) {
            ++rooms;
        } else {
            ++endPointer;
        }
    }
    
    return rooms;
};

var minMeetingRooms = function(intervals) {
    if (!intervals || !intervals.length) {
        return 0;   
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const heap = [];
    
    heap.push(intervals[0]);
    
    for (let i = 1; i < intervals.length; ++i) {
        if (intervals[i][0] >= heap[0][1]) {
            heap.shift();
        }
        
        heap.push(intervals[i]);
        heap.sort((a, b) => a[1] - b[1]);
    }
    
    return heap.length;
}
