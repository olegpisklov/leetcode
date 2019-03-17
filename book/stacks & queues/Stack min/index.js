const Stack = require('../stack');

class StackWithMin extends Stack {
    constructor() {
        super();
        this.mins = new Stack();
    }

    push(value) {
        if (this.mins.isEmpty() || value <= this.mins.peek()) {
            this.mins.push(value);
        }

        const item = new StackNode(value);

        item.next = this.top;

        this.top = item;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }

        const item = this.top;

        this.top = this.top.next;
        if (item.data === this.mins.peek()) {
            this.mins.pop();
        }

        return item;
    }
}

class StackNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}


const s = new StackWithMin();

s.push(4);
s.push(7);
s.push(43);
s.push(1);
s.pop();