class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
}

const isLikedListPalindrome = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;        
    }

    const reversedHalf = reverse(slow);
    let isPalindrome = true;
    let leftPoiner = head;
    let rightPoiner = reversedHalf;

    while (rightPoiner) {
        if (leftPoiner.value !== rightPoiner.value) {
            isPalindrome = false;
            break;
        }

        leftPoiner = leftPoiner.next;
        rightPoiner = rightPoiner.next;
    }

    reverse(reversedHalf);

    return isPalindrome;
}
  
const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

const reverse = (head) => {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

console.log(`Is palindrome: ${isLikedListPalindrome(head)}`);
head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${isLikedListPalindrome(head)}`);