const Node = function (val) {
    this.val = val;
    this.next = null;
}

var Stack = function() {
    this.head = null;
};

Stack.prototype.push = function(x) {
    const node = new Node(x);
    
    node.next = this.head;
    this.head = node;
};

Stack.prototype.pop = function() {
    const val = this.head.val;
    
    this.head = this.head.next;
    
    return val;
};

Stack.prototype.top = function() {
    return this.head.val;
};

Stack.prototype.isEmpty = function() {
    return !this.head;
};


/**
 * initialize your data structure here.
 */
var MaxStack = function() {
    this.mainStack = new Stack();
    this.maxStack = new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    if (this.maxStack.isEmpty()) {
        this.maxStack.push(x);
    } else {
        this.maxStack.push(Math.max(x, this.maxStack.top()));
    }
    
    this.mainStack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    this.maxStack.pop();
    
    return this.mainStack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.mainStack.top();
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() { 
    return this.maxStack.top();
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    const max = this.maxStack.top();
    const buffer = new Stack();
    
    while (max !== this.top()) {
        buffer.push(this.pop());
    }
    
    this.pop();
    
    while (!buffer.isEmpty()) {
        this.push(buffer.pop());
    }
    
    return max;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */