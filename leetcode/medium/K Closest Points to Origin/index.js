/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

var kClosest = function(points, K) { // quick select, O (n) on avarage, O(n^2) worst case
    let left = 0;
    let right = points.length - 1; 
    
    while (left <= right) {
        const partitionInd = partition(points, left, right);

        if (partitionInd === K - 1) {
            break;
        } else if (partitionInd > K - 1) {
            right = partitionInd - 1;
        } else {
            left = partitionInd + 1;
        }
    }
    
    return points.splice(0, K);
}

const partition = (arr, start, end) => {
    let left = start;
    const pivot = getDistance(arr[end]);
    
    for (let right = left; right < end; ++right) {
        if (getDistance(arr[right]) < pivot) {
            swap(arr, left, right);
            ++left;
        }
    }
    
    swap(arr, left, end);
    
    return left;
}

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const getDistance = (point) => {
    return Math.sqrt(point[0] * point[0] + point[1] * point[1]);
}

// ------------------------------------------------------------------------------------

var kClosestHeap = function(points, K) {
    const heap = new MaxHeap(K);
    
    for (let i = 0; i < points.length; ++i) {
        const point = points[i];
        const distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);
        
        heap.add(new Point(distance, point));
    }
    
    return heap.values.map(point => point.value);
};

class Point {
    constructor(distance, value) {
        this.distance = distance;
        this.value = value;
    }
}

class MaxHeap {
    constructor(capasity) {
        this.values = [];
        this.capasity = capasity;
    }
    
    add(point) {
        this.values.push(point);
        this.values.sort((a, b) => b.distance - a.distance);
        
        if (this.values.length > this.capasity) {
            this.values.shift();
        }
    }
    
    peek() {
        return this.values[0];
    }
    
    isEmpty() {
        return !this.values.length;
    }
}