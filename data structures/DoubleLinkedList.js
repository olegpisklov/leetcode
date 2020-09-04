class DListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DLinkedList {
    constructor() {
        this.head = new DListNode(); // put null nodes to the head and tail for more convinient handling null pointers
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