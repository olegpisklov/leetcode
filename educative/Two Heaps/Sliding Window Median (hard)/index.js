
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class SlidingWindowMedian {

  constructor () {
    this.maxHeap = new Heap([]);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  insert_num(num) {
    if (!this.maxHeap.length || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    this.rebalance();
  }

  rebalance() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_median() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }

    return this.maxHeap.peek();
  }

  remove_num(num) {
    if (this.maxHeap.peek() >= num) {
      this.maxHeap.delete(num);
    } else {
      this.minHeap.delete(num);
    }

    this.rebalance();
  }

  find_sliding_window_median(nums, k) {
    const result = [];
    let start = 0;
    let end = 0;
    
    while (end !== nums.length) {
      this.insert_num(nums[end]);

      if (end - start < k - 1) {
        ++end;
      } else {
        result.push(this.find_median());
        this.remove_num(nums[start]);
        ++start;
        ++end;
      }
    }

    return result;
  }
};



var slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
  [1, 2, -1, 3, 5], 2)

console.log(`Sliding window medians are: ${result}`)

slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
  [1, 2, -1, 3, 5], 3)
console.log(`Sliding window medians are: ${result}`)
