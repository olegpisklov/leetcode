const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class MedianOfAStream {
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
};



var medianOfAStream = new MedianOfAStream()
medianOfAStream.insert_num(3)
medianOfAStream.insert_num(1)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(5)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(4)
console.log(`The median is: ${medianOfAStream.find_median()}`)
