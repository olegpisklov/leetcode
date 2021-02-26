/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomListSpace = function(head) {
    let current = head;
    let newCurrent;
    let newHead;
    
    const map = new Map();
    
    while (current) {
        const {val, random} = current;
        let node;

        if (!map.has(current)) {
            node = new Node(val);
            map.set(current, node);
        } else {
            node = map.get(current);
        }
        
        if (random !== null && !map.has(random)) {
            const randomNode = new Node(random.val);
            
            node.random = randomNode;
            map.set(random, randomNode);
        } else if (random !== null && map.has(random)) {
            node.random = map.get(random);
        }
        
        if (!newHead) {
            newHead = node;
            newCurrent = node;
        } else {
            newCurrent.next = node;
            newCurrent = node;
        }
        
        current = current.next;
    }
    
    return newHead;
};


var copyRandomList = function(head) {
    let current = head;
    
    while (current) {
        const node = new Node(current.val);
        const next = current.next;
        
        node.next = next;
        current.next = node;
        
        current = next;
    }
    
    current = head;

    while (current) {
        const newNode = current.next;
        const newRand = current.random ? current.random.next : null;
        
        newNode.random = newRand;
        
        current = newNode.next;
    }
    
    const newHead = new Node();
    
    current = head;
    let currentNew = newHead;
    
    while (current) {
        const newNode = current.next;
        
        currentNew.next = newNode;
        
        current.next = newNode.next;
        
        currentNew = newNode;
        current = newNode.next
    }

    return newHead.next ;
}