/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKListsBrut = function(lists) { // Compare one by one
    let resHead = new ListNode();
    let resTail = resHead;
    
    while (true) {
        let minIndex = -1;
        let min = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < lists.length; ++i) {
            if (lists[i] && lists[i].val <= min) {
                min = lists[i].val;
                minIndex = i;
            }
        }
        
        if (minIndex === -1) {
            break;
        }
        
        lists[minIndex] = lists[minIndex].next;
        
        resTail.next = new ListNode(min);
        resTail = resTail.next;
    }
    
    return resHead.next;
};

class MinHeap {
    constructor(callback) {
        this.list = [];
        this.callback = callback;
    }
    
    add(val) {
        this.list.push(val);
        this.list.sort(this.callback);
    }
    
    pop() {
        return this.list.pop();
    }
    
    isEmpty() {
        return !this.list.length;
    }
}

var mergeKLists = function(lists) { // MinHeap approach
    if (lists.length === 1) {
        return lists[0];
    }

    const heap = new MinHeap((a, b) => b.val - a.val);
    
    for (let i = 0; i < lists.length; ++i) {
        if (lists[i]) {
            heap.add(lists[i]);    
        }
    }
    
    const head = new ListNode(null);
    let current = head;
    
    while (!heap.isEmpty()) {
        const min = heap.pop();
        
        current.next = min;
        current = current.next;
        
        if (min.next) {
            heap.add(min.next);
        }
    }
    
    return head.next;
}

var mergeKLists = function(lists) { // O(1) space
    if (!lists || !lists.length) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    
    let interval = 1;
    
    while (interval < lists.length) {
        for (let i = 0; i < lists.length - interval; i += interval * 2) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }
        
        interval *= 2;
    }
    
    return lists[0];
}

// 1 -> 2 -> 3 -> 8
// 4 -> 5 -> 9

const mergeTwoLists = (l1, l2) => {
    let p1 = l1;
    let p2 = l2;
    
    let resultHead = new ListNode();
    let resPointer = resultHead;
    
    while (p1 && p2) {
        if (p1.val < p2.val) {
            resPointer.next = p1;
            p1 = p1.next;
        } else {
            resPointer.next = p2;
            p2 = p2.next;        
        }
        resPointer = resPointer.next;
    }
    
    resPointer.next = p1 || p2;
    
    return resultHead.next;
}


