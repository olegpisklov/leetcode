class LinkedListNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
const node4 = new LinkedListNode(4);
const node5 = new LinkedListNode(5);
const node6 = new LinkedListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node3;

const getLoopStart = (head) => {
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            break;
        }
    }

    // no collision
    if (fast.next === null || fast.next.next === null) {
       return null
    }

    // collision point
    // move slow to start
    slow = head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // start of the loop
    return slow;
};

console.log(getLoopStart(node1));