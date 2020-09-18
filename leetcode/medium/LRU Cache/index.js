class DListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLinkedList {
    constructor() {
        this.head = new DListNode();
        this.tail = new DListNode();
        
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    addToHead(val) {
        const node = new DListNode(val);
        const next = this.head.next;
        
        node.next = next;
        node.prev = this.head;
        next.prev = node;
        
        this.head.next = node;

        return node;
    }
    
    removeFromTail() {
        const prev = this.tail.prev;
        const val = prev.val;
        
        this.removeNode(prev);
        
        return val;
    }
    
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = {};
    this.dqueue = new DLinkedList();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key] === undefined) {
        return -1;
    }
    
    this.moveToHead(key);

    return this.map[key][0];
};

LRUCache.prototype.moveToHead = function(key) {
    const oldNode = this.map[key][1];
    this.dqueue.removeNode(oldNode);
        
    const newNode = this.dqueue.addToHead(key);
    this.map[key][1] = newNode;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map[key] !== undefined) {
        this.map[key][0] = value;
        this.moveToHead(key);
        return;
    }
    
    const node = this.dqueue.addToHead(key);
    
    this.map[key] = [value, node];
        
    if (Object.keys(this.map).length > this.capacity) {
        const firstKey = this.dqueue.removeFromTail();
        delete this.map[firstKey];
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */