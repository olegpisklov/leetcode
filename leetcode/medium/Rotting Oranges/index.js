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


var orangesRottingQ = function(grid) {
    let steps = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const rotten = new LinkedList();
    let freshCount = 0;
    
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (grid[i][j] === 2) {
                rotten.addToTail({row: i, col: j});
            }
            if (grid[i][j] === 1) {
                ++freshCount;
            }
        }
    }
    
    while(!rotten.isEmpty() && freshCount > 0) {
        const size = rotten.length;
        
        ++steps;
        
        for (let i = 0; i < size; ++i) {
            const current = rotten.removeFromHead();
            
            if (current.row > 0 && grid[current.row - 1][current.col] === 1) {
                grid[current.row - 1][current.col] = 2;
                rotten.addToTail({row: current.row - 1, col: current.col});
                --freshCount;
            }
            if (current.row < grid.length - 1 && grid[current.row + 1][current.col] === 1) {
                grid[current.row + 1][current.col] = 2;
                rotten.addToTail({row: current.row + 1, col: current.col});
                --freshCount;
            }
            if (current.col > 0 && grid[current.row][current.col - 1] === 1) {
                grid[current.row][current.col - 1] = 2;
                rotten.addToTail({row: current.row, col: current.col - 1});
                --freshCount;
            }
            if (current.col < grid[0].length - 1 && grid[current.row][current.col + 1] === 1) {
                grid[current.row][current.col + 1] = 2;
                rotten.addToTail({row: current.row, col: current.col + 1});
                --freshCount;
            }       
        }

    }
        
    if (freshCount) {
        return -1;
    }
    
    return steps;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let steps = 0;
    let updated = true;
    
    while (updated) {
        updated = false;
        
        for (let i = 0; i < grid.length; ++i) {
            for (let j = 0; j < grid[0].length; ++j) {
                if (grid[i][j] !== 1) {
                    continue;
                }
                                
                if (i > 0 && grid[i - 1][j] === 2 ||
                    i < grid.length - 1 && grid[i + 1][j] === 2 ||
                    j > 0 && grid[i][j - 1] === 2 ||
                    j < grid[0].length - 1 && grid[i][j + 1] === 2) {
                    grid[i][j] = 3;
                    updated = true;
                }
            }    
        }
        
        for (let i = 0; i < grid.length; ++i) {
            for (let j = 0; j < grid[0].length; ++j) {
                if (grid[i][j] === 3) {
                    grid[i][j] = 2;
                }
            }    
        }
        
        if (updated) {
            ++steps;
        }
    }
        
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }    
    }

    return steps;
};