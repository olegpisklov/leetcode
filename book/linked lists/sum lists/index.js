const LinkedList = require('../liked-list');

class LinkedListNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

const list1 = new LinkedList(1);
const list2 = new LinkedList(5);

list1.addToHead(2);
list1.addToHead(3);
list1.addToHead(4);

list2.addToHead(8);
list2.addToHead(2);
list2.addToHead(9);

const sum = (l1, l2) => {
    let headPointer1 = l1.head;
    let headPointer2 = l2.head;

    // pad with 0 to make lengths equal
    while (headPointer1 || headPointer2) {
        if (headPointer1 && !headPointer2) {
            l2.addToHead(0);
        }

        if (!headPointer1 && headPointer2) {
            l1.addToHead(0);
        }

        headPointer1 = headPointer1 && headPointer1.next;
        headPointer2 = headPointer2 && headPointer2.next;
    }

    headPointer1 = l1.head;
    headPointer2 = l2.head;

    let result = sumLists(headPointer1, headPointer2);

    if (result.carry) {
        const node = new LinkedListNode(1);
        node.next = result.node;
        result = {node};
    }

    return result.node;
};

const sumLists = (node1, node2) => {
    if (!node1 || !node2) {
        return {
            node: null,
            carry: 0
        };
    }

    const sumRes = sumLists(node1.next, node2.next);

    const sum = node1.data + node2.data + sumRes.carry;
    let carry = 0;
    let node;

    if (sum >= 10) {
        node = new LinkedListNode(sum % 10);
        carry = 1;
    } else {
        node = new LinkedListNode(sum);
        carry = 0;
    }

    node.next = sumRes.node;

    return {
        node,
        carry
    };
};

console.log(
    JSON.stringify(sum(list1, list2))
);

