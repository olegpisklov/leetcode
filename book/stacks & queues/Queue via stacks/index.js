const Stack = require('../stack');

class MyQueue {
    constructor () {
        this.orderedStack = new Stack();
        this.reversedStack = new Stack();
    }

    push(value) {
        this.orderedStack.push(value);

        if (!this.reversedStack.isEmpty()) {
            while (!this.reversedStack.isEmpty()) {
                const reversedItem = this.reversedStack.peek();

                this.orderedStack.push(reversedItem.data);
            }
        }
    }

    pop() {
        if (!this.reversedStack.isEmpty()) {
            return this.reversedStack.pop();
        }

        if (this.orderedStack.isEmpty()) {
            throw new Error('Queue is empty');
        }

        let item;

        while (!this.orderedStack.isEmpty()) {
            item = this.orderedStack.pop();

            if (!this.orderedStack.isEmpty()) {
                this.reversedStack.push(item.data);
            }
        }

        return item;
    }

    peek() {
        if (this.orderedStack.isEmpty()) {
            throw new Error('Queue is empty');
        }

        if (!this.reversedStack.isEmpty()) {
            return this.reversedStack.peek();
        }
    }

    isEmpty() {
        return this.orderedStack.isEmpty();
    }

}

const qwe = new MyQueue();

qwe.push(12);
console.log('push', qwe);

qwe.push(123);
console.log('push', qwe);

qwe.push(1245);
console.log('push', qwe);

console.log('-------------------------------------------');


console.log('pop', qwe.pop().data, qwe);
console.log('pop', qwe.pop().data, qwe);
console.time('qqq');
console.log('pop', qwe.pop().data, qwe);
console.timeEnd('qqq');
