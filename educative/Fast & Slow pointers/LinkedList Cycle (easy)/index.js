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

    return true;  
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