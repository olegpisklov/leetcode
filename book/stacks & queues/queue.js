module.exports = class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    add(value) {
        const item = new QueueNode(value);

        if (this.last) {
            this.last.next = item;
        }

        this.last = item;

        if (!this.first) {
            this.first = this.last;
        }
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        const data = this.first.data;

        this.first = this.first.next;

        if (!this.first) {
            this.last = null;
        }

        return data;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        return this.first.data;
    }

    isEmpty() {
        return this.first === null;
    }
};

class QueueNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}