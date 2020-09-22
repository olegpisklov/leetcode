class DListNode {
    constructor(val, key) {
        this.val = val;
        this.key = key;
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
    
    addToHead(val, key) {
        const node = new DListNode(val, key);
        const next = this.head.next;
        
        node.next = next;
        node.prev = this.head;
        next.prev = node;
        
        this.head.next = node;

        return node;
    }
    
    removeFromTail() {
        const prev = this.tail.prev;
        const key = prev.key;
        
        this.removeNode(prev);
        
        return key;
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

    return this.map[key].val;
};

LRUCache.prototype.moveToHead = function(key) {
    const oldNode = this.map[key];
    this.dqueue.removeNode(oldNode);
        
    const newNode = this.dqueue.addToHead(oldNode.val, key);

    this.map[key] = newNode;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const oldNode = this.map[key];
    
    if (oldNode !== undefined) {
        oldNode.val = value;
        this.moveToHead(key);
        return;
    }
    
    const node = this.dqueue.addToHead(value, key);
    
    this.map[key] = node;
        
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