// https://www.geeksforgeeks.org/closest-pair-of-points-using-divide-and-conquer-algorithm/
// https://aonecode.com/interview-question/squared-shortest-distance

const main = (points) => {
    points.sort((a, b) => a[0] - b[0]);

    return helper(points, 0, points.length);
}

const helper = (points, start, end) => {
    if (end - start <= 3) {
        return findClosestBrute(points, start, end);
    }

    const mid = Math.floor((start + end) / 2);
    const leftMin = helper(points, start, mid);
    const rightMin = helper(points, mid, end);
    const dist = Math.min(leftMin, rightMin);
    const strip = [];  
    const midPoint = points[mid];

    for (let i = start; i < end; i++) {
        if (Math.abs(points[i][0] - midPoint[0]) < dist) {
            strip.push(points[i]);
        }
    }
    
    return Math.min(dist, findStripClosest(strip, dist));
}

const findStripClosest = (strip, dist) => {  
    let min = dist; // Initialize the minimum distance as d  
  
    strip.sort((a, b) => a[1] - b[1]);
  
    // Pick all points one by one and try the next points till the difference  
    // between y coordinates is smaller than d.  
    // This is a proven fact that this loop runs at most 6 times  
    for (let i = 0; i < strip.length; ++i) {
        for (let j = i + 1; j < strip.length && (strip[j][1] - strip[i][1]) < min; ++j) {
            const curDist = getDistance(strip[i], strip[j]);

            if (curDist < min) {
                min = curDist;
            }            
        }
    }
  
    return min;  
}
const findClosestBrute = (points, start, end) => {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = start; i < end - 1; ++i) {
        for (let j = i + 1; j < end; ++j) {
            const dist = getDistance(points[i], points[j]);
            
            if (dist < min) {
                min = dist;
            }
        }
    }

    return min;
}

const getDistance = (point1, point2) => {
    const dist = Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2);
    return dist === 0 ? Number.MAX_SAFE_INTEGER : dist;
}

// Time: O(n * log(n))

// console.log(main([[2, 3], [12, 30], [40, 50], [5, 1], [12, 10], [3, 4]]));

console.log(main([[5, 3], [2, 2], [2, 5]])); // 9
console.log(main([[2, 3], [4, 0], [5, 1], [7, 4 ], [1, 8], [0, 2]])); // 2
console.log(main([[7, 1], [1, 4]])); // 45
console.log(main([[0, 0], [1, 1], [2, 4]])); // 2
console.log(main([[0, 0], [2, 3], [0, 0]])); // 13