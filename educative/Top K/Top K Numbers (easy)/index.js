const Heap = require('./collections/heap'); //http://www.collectionsjs.com
const find_k_largest_numbers = function(nums, k) {
  const heap = new Heap([], null, ((a, b) => b - a)); // min heap

  for (let i = 0; i < k; ++i) {
    heap.push(nums[i]);
  }

  for (let j = k; j < nums.length; ++j) {
    const min = heap.peek();

    if (min < nums[j]) {
      heap.pop();
      heap.push(nums[j]);
    }
  }

  return heap.toArray();
};


console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`)
console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`)
