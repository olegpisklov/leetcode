const LinkedList = require('../liked-list');

const partition = (node, p) => {
    let before = null;
    let after = null;
    let afterStart = null;
    let beforeStart = null;

    while(node) {
        if (node.data >= p) {
            if (!after) {
                after = node;
                afterStart = after;
            } else {
                after.next = node;
                after = node;
            }
        } else {
            if (!before) {
                before = node;
                beforeStart = node;
            } else {
                before.next = node;
                before = node;
            }
        }

        // merge on end
        if (!node.next) {
            before.next = afterStart;
        }

        node = node.next;
    }

    return beforeStart;
};

const list = new LinkedList(12);

list.addToHead(2);
list.addToHead(3);
list.addToHead(5);
list.addToHead(4);
list.addToHead(8);


console.log(JSON.stringify(partition(list.head, 5)) );

