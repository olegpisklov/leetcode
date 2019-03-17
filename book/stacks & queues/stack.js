module.exports = class Stack {
    constructor () {
        this.top = null;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        const item = this.top;
        this.top = this.top.next;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.top.data;
    }

    push(value) {
        const item = new StackNode(value);

        item.next = this.top;

        this.top = item;
    }

    isEmpty() {
        return this.top === null;
    }
};

class StackNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}