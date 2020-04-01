const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const find_Kth_smallest = function(lists, k) {
  let numberIndex = 0;
  let number;
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  for (let i = 0; i < lists.length; ++i) {
    minHeap.push([lists[i][0], i, 0]);
  }

  while (numberIndex !== k && minHeap.length) {
    const [value, listIndex, valueIndex] = minHeap.pop();

    ++numberIndex;
    number = value;

    if (lists[listIndex].length > valueIndex + 1) {
      minHeap.push([lists[listIndex][valueIndex + 1], listIndex, valueIndex + 1]);
    }
  }

  return number;
};

// Time: O(K*logM) where ‘M’ is the total number of input arrays.
// Space: O(M)

console.log(`Kth smallest number is: ${find_Kth_smallest([[2, 6, 8], [3, 6, 7], [1, 3, 4]], 5)}`)
