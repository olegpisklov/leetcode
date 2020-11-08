class MaxHeap {
    constructor() {
        this.pq = [null];
    }

    insert(key) {
        this.pq.push(key);
        this.swim(this.pq.length - 1);
    }

    swim(k) {
        while(k > 1 && this.less(k/2, k)) {
            this.swap(k/2, k);
            k = Math.floor(k/2);
        }
    }

    sink(k) {
        while(2*k < this.pq.length) {
            let j = 2*k;

            if (this.less(j, j + 1)) {
                ++j;
            }
            if (!this.less(k, j)) {
                break;
            }

            this.swap(k, j);

            k = j;
        }
    }

    delMax() {
        const max = this.pq[1];

        this.swap(1, this.pq.length - 1);
        this.pq.pop();
        this.sink(1);

        return max;
    }

    less(ind1, ind2) {
        ind1 = Math.floor(ind1);
        ind2 = Math.floor(ind2);

        return this.pq[ind1] < this.pq[ind2];
    }

    swap(ind1, ind2) {
        ind1 = Math.floor(ind1);
        ind2 = Math.floor(ind2);

        const temp = this.pq[ind1];

        this.pq[ind1] = this.pq[ind2];
        this.pq[ind2] = temp;
    }
}

const heap = new MaxHeap();

heap.insert(3);
heap.insert(8);
heap.insert(5);
heap.insert(1);
heap.insert(9);
heap.insert(2);

console.log(heap.pq);

console.log(heap.delMax());
console.log(heap.pq);

console.log(heap.delMax());
console.log(heap.pq);

console.log(heap.delMax());
console.log(heap.pq);

console.log(heap.delMax());
console.log(heap.pq);

console.log(heap.delMax());
console.log(heap.pq);

console.log(heap.delMax());
console.log(heap.pq);
