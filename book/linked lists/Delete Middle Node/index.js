const LinkedList = require('../liked-list');

const deleteMiddle = (node) => {
    if (!node || !node.next) {
        return false;
    }

    node.data = node.next.data;
    node.next = node.next.next;

    return true;
};

const list = new LinkedList(1);

list.addToHead(2);
list.addToHead(3);
list.addToHead(4);
list.addToHead(4);

deleteMiddle(list.head.next);

console.log(list.head);

