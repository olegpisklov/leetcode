
class LinkedNode {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class HashTable {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.items.fill(null);
    }

    set(key, value) {
        const node = this.__getNodeByKey(key);

        if (node !== null) {
            node.value = value;
            return;
        }

        const newNode = new LinkedNode(key, value);
        const index = this.__getIndexByKey(key);
        const currentNode = this.items[index];

        if (currentNode !== null) {
            newNode.next = currentNode;
            currentNode.prev = newNode;
        }

        this.items[index] = newNode;
    }

    get(key) {
        const node = this.__getNodeByKey(key);

        return node !== null ? node.value : null;
    }

    __getNodeByKey(key) {
        const index = this.__getIndexByKey(key);
        let currentNode = this.items[index];

        while (currentNode !== null) {
            if (currentNode.key === key) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    __getIndexByKey(key) {
        let hashCode = 0;

        for (let i = 0; i < key.length; ++i) {
            hashCode += key.charCodeAt(i) * (i + 1);
        }

        return hashCode % this.items.length;
    }
}

const qwe = new HashTable(100);

qwe.set('qwe', 1111);
qwe.set('qwe1', 2222);
qwe.set('qwe2', 3333);
qwe.set('qwe3', 4444);

console.log(qwe.get('qwe'))