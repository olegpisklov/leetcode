const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const find_k_frequent_numbers = function(nums, k) {
  const frequencyHashMap = {};

  for (let i = 0; i < nums.length; ++i) {
    if (frequencyHashMap.hasOwnProperty(nums[i])) {
      frequencyHashMap[nums[i]] += 1;
    } else {
      frequencyHashMap[nums[i]] = 1;
    }
  }

  const minHeap = new Heap([], null, (a, b) => b[1] - a[1]);

  Object.keys(frequencyHashMap).forEach(key => {
    minHeap.push([key, frequencyHashMap[key]]);

    if (minHeap.length > k) {
      minHeap.pop();
    }
  });

  const topNumbers = [];
  
  while (minHeap.length > 0) {
    topNumbers.push(minHeap.pop()[0]);
  }

  return topNumbers;
};

// Time: O(N + N*log(K))
// Space: O(N)

console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)
