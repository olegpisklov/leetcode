module.exports = class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        if (value) {
            this.addToHead(value);
        }
    }

    addToHead(value) {
        const newNode = { data: value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    addToTail(value) {
        const newNode = { data: value };

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let currentTail = this.head;

        while (currentTail.next) {
            currentTail = currentTail.next;
        }

        currentTail.next = newNode;
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }

        const value = this.head.data;
        this.head = this.head.next;
        this.length--;

        return value;
    }

    find(val) {
        let thisNode = this.head;

        while(thisNode) {
            if(thisNode.data === val) {
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }

    remove(val) {
        if(this.length === 0) {
            return undefined;
        }

        if (this.head.data === val) {
            return this.removeFromHead();
        }

        let previousNode = this.head;
        let thisNode = previousNode.next;

        while(thisNode) {
            if(thisNode.data === val) {
                break;
            }

            previousNode = thisNode;
            thisNode = thisNode.next;
        }

        if (thisNode === null) {
            return undefined;
        }

        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
}