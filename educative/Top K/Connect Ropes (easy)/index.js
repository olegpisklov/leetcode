const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const minimum_cost_to_connect_ropes = function(ropeLengths) {
  const minHeap = new Heap(ropeLengths, null, (a, b) => b - a);
  let sum = 0;
  
  while (minHeap.length > 1) {
    const firstMin = minHeap.pop();
    const secondMin = minHeap.pop();
    const currentSum = firstMin + secondMin;

    sum += currentSum;

    minHeap.push(currentSum);
  }

  return sum;
};

// Time: O(N * logN)

// Space: O(N)


console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`)
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)
