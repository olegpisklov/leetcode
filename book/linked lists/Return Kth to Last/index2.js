const LinkedList = require('../liked-list');

/**
 * Iterative solution
 * @param head
 * @param k
 */
const findK = (head, k) => {
    let n1 = head;
    let n2 = head;

    for (let i = 0; i < k; ++i) {
        n1 = n1.next;
    }

    while (n1) {
        n1 = n1.next;
        n2 = n2.next;
    }

    return n2;
};

const list = new LinkedList(31);

list.addToHead(2);
list.addToHead(55);
list.addToHead(77);
list.addToHead(4);

console.log(findK(list.head, 3));
