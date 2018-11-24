class LinkedListNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

const node1 = new LinkedListNode(12);
const node2 = new LinkedListNode(142);
const node3 = new LinkedListNode(152);
const node4 = new LinkedListNode(1472);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const head1 = node1;
const head2 = node3;

const findIntersection = (list1, list2) => {
    const listInfo1 = getListInfo(list1);
    const listInfo2 = getListInfo(list2);

    if (listInfo1.lastNode !== listInfo2.lastNode) {
        return null;
    }
    
    let diff = Math.abs(listInfo1.length - listInfo2.length);
    let pointer1 = list1;
    let pointer2 = list2;
    
    while (pointer1 && pointer2) {
        if (listInfo1.length > listInfo2.length && diff) {
            pointer1 = pointer1.next;
            --diff;
            continue;
        }
        if (listInfo1.length < listInfo2.length && diff) {
            pointer2 = pointer2.next;
            --diff;
            continue;
        }

        if (pointer1 === pointer2) {
            return pointer1;
        }

        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
};

const getListInfo = (head) => {
    let length = 1;
    let lastNode = head;

    while (lastNode.next) {
        ++length;
        lastNode = lastNode.next
    }

    return {
        length,
        lastNode
    };
};

console.log(findIntersection(head1, head2));