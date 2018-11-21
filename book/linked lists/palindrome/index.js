const LinkedList = require('../liked-list');
class LinkedListNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
const list = new LinkedList(10);

list.addToHead(4);
list.addToHead(2);
list.addToHead(4);
list.addToHead(10);

const isPalindrome = (head) => {
    const reversed = reverse(head);
    let headPointer = head;
    let reversedPointer = reversed;

    while (headPointer && reversedPointer) {
        if (headPointer.data !== reversedPointer.data) {
            return false;
        }

        headPointer = headPointer.next;
        reversedPointer = reversedPointer.next;
    }

    return true;
};

const reverse = (node, next = null) => {
    if (!node) {
        return next;
    }

    const newNode = new LinkedListNode(node.data);

    newNode.next = next;

    return reverse(node.next, newNode);
};

console.log(isPalindrome(list.head));