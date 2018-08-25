const LinkedList = require('../liked-list');
/**
 * Recursive solution
 * @param head
 * @param k
 */
const findK = (head, k) => {
    const i = {value: 0};

    return findKElement(head, k, i);
};

const findKElement = (node, k, i) => {
    if (!node) {
        return null;
    }

    const target = findKElement(node.next, k, i);

    if (k === i.value) {
        return target;
    }

    i.value += 1;

    return node;
};

const list = new LinkedList(31);

list.addToHead(2);
list.addToHead(55);
list.addToHead(77);
list.addToHead(4);

console.log(findK(list.head, 2));
