class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0;
    }
    
    addToHead(val) {
        const node = new ListNode(val);
        
        node.next = this.head;
        this.head = node;
        
        if (!this.tail) {
            this.tail = node;
        }
        
        this.length += 1;
    }
    
    addToTail(val) {
        const node = new ListNode(val);

        if (this.tail) {
            this.tail.next = node;    
        }
        
        if (!this.head) {
            this.head = node;
        }
        
        this.tail = node;
        
        this.length += 1;
    }
    
    convertToArray() {
        let pointer = this.head;        
        const result = new Array(this.length);
        let i = 0;
        
        while (pointer) {
            result[i] = pointer.val;
            ++i;
            pointer = pointer.next;
        }
        
        return result;
    }
    
    peek() {
        return this.head.val;
    }
    
    removeFromHead() {
        const val = this.head.val;
        
        this.head = this.head.next;
        
        this.length -= 1;
        
        return val;
    }
    
    isEmpty() {
        return !this.head;
    }
}


/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.queue = new LinkedList();
    this.currentSum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.addToTail(val);
    this.currentSum += val;
    
    if (this.queue.length > this.size) {
        const prevVal = this.queue.removeFromHead();
        this.currentSum -= prevVal;
    }
    
    return this.currentSum / Math.min(this.queue.length, this.size);
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */