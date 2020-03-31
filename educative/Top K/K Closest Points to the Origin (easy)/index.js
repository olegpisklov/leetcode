class Point {

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    get_point() {
      return "[" + this.x + ", " + this.y + "] ";
    }
  };
  
  const Heap = require('./collections/heap'); //http://www.collectionsjs.com
  
  const find_closest_points = function(points, k) {
    const maxHeap = new Heap([], null, function (a, b) {
      const aDistance = Math.pow(a.x, 2) + Math.pow(a.y, 2); // without Math.sqrt()
      const bDistance = Math.pow(b.x, 2) + Math.pow(b.y, 2);
  
      return aDistance - bDistance;
    });
  
    for (let i = 0; i < k; ++i) {
      maxHeap.push(points[i]);
    }
  
    for (let j = k; j < points.length; ++j) {
      const max = maxHeap.peek();
      const maxDistance = Math.pow(max.x, 2) + Math.pow(max.y, 2);
      const currentDistance = Math.pow(points[j].x, 2) + Math.pow(points[j].y, 2);
  
      if (maxDistance > currentDistance) {
        maxHeap.pop();
        maxHeap.push(points[j]);
      }
    }
  
    return maxHeap.toArray();
  };
  
  
  points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
  result = "Here are the k points closest the origin: ";
  for (i=0; i < points.length; i++)
    result += points[i].get_point();
  console.log(result);
  