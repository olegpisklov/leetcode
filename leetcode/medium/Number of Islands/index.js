class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0;
    }
    
    addToHead(val) {
        const node = new ListNode(val);
        
        node.next = this.head;
        this.head = node;
        
        if (!this.tail) {
            this.tail = node;
        }
        
        this.length += 1;
    }
    
    addToTail(val) {
        const node = new ListNode(val);

        if (this.tail) {
            this.tail.next = node;    
        }
        
        if (!this.head) {
            this.head = node;
        }
        
        this.tail = node;
        
        this.length += 1;
    }
    
    convertToArray() {
        let pointer = this.head;        
        const result = new Array(this.length);
        let i = 0;
        
        while (pointer) {
            result[i] = pointer.val;
            ++i;
            pointer = pointer.next;
        }
        
        return result;
    }
    
    peek() {
        return this.head.val;
    }
    
    removeFromHead() {
        const val = this.head.val;
        
        this.head = this.head.next;
        
        this.length -= 1;
        
        return val;
    }
    
    isEmpty() {
        return !this.head;
    }
}


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || ! grid.length) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    const q = new LinkedList();
    let islands = 0;
    
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (grid[i][j] === '0') {
                continue;
            }
            
            ++islands;
            q.addToTail({i, j});
            grid[i][j] = '0';

            while(!q.isEmpty()) {
                const cur = q.removeFromHead();
                
                if (cur.i + 1 < rows && grid[cur.i + 1][cur.j] === '1') {
                    q.addToTail({i: cur.i + 1, j: cur.j});
                    grid[cur.i + 1][cur.j] = '0';
                }
                if (cur.j + 1 < cols && grid[cur.i][cur.j + 1] === '1') {
                    q.addToTail({i: cur.i, j: cur.j + 1});
                    grid[cur.i][cur.j + 1] = '0';
                }
                if (cur.i > 0 && grid[cur.i - 1][cur.j] === '1') {
                    q.addToTail({i: cur.i - 1, j: cur.j});
                    grid[cur.i - 1][cur.j] = '0';
                }
                if (cur.j > 0 && grid[cur.i][cur.j - 1] === '1') {
                    q.addToTail({i: cur.i, j: cur.j - 1});
                    grid[cur.i][cur.j - 1] = '0';
                }
            }
        }    
    }

    return islands;
};