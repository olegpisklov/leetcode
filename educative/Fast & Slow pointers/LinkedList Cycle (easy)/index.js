class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
  
const has_cycle = function(head) {
    if (!head || !head.next) {
        return false;
    }

    let slowPointer = head;
    let fastPointer = head.next;

    while (slowPointer !== fastPointer) {
        if (!slowPointer || !fastPointer.next) {
            return false;
        }

        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    const cycleLength = calculateCycleLength(slowPointer);

    console.log('Length', cycleLength);

    const start = findCycleStart(head, cycleLength);

    console.log('Start', start);

    return true;  
}

const calculateCycleLength = (node) => {
    let current = node;
    let length = 0;

    while (true) {
        ++length;
        current = current.next;

        if ( current === node) {
            return length;
        }
    }    
}

const findCycleStart = (head, cycleLength) => {
    let slow = head;
    let fast = head;
    let i = 0;

    while (i !== cycleLength) {
        fast = fast.next;
        ++i;
    }

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)