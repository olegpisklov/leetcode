class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

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