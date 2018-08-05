const LinkedList = require('../liked-list');

const removeDups = (listNode) => {
    const set = new Set();
    let currentNode = listNode;
    let previousNode = null;

    while (currentNode) {
        if (!set.has(currentNode.data)) {
            set.add(currentNode.data);
            previousNode = currentNode;
        } else {
            previousNode.next = currentNode.next;
        }

        currentNode = currentNode.next;
    }
    
    return listNode;
};



const list = new LinkedList(1);

list.addToHead(2);
list.addToHead(3);
list.addToHead(4);
list.addToHead(4);

console.log(removeDups(list.head));

