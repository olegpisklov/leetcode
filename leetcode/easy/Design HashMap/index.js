
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.list = new Array(1000).fill(-1);
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {    
    const ind = key % this.list.length;
    const node = {key, value};
    
    if (this.list[ind] === -1) {
        this.list[ind] = [node];
    } else {
        let deque = this.list[ind];
        let updated = false;
        
        for (let i = 0; i < deque.length; ++i) {
            if (deque[i].key === key) {
                deque[i].value = value;
                updated = true;
                break;
            }
        }
        
        if (!updated) {
            deque.push(node);   
        }
    }
};


/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const ind = key % this.list.length;

    if (this.list[ind] === -1) {
        return -1;
    }
    
    for (let i = 0; i < this.list[ind].length; ++i) {
        while(this.list[ind][i].key === key) {
            return this.list[ind][i].value;
        }
    }
    
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {    
    const ind = key % this.list.length;

    if (this.list[ind] === -1) return;
    
    for (let i = 0; i < this.list[ind].length; ++i) {
        if (this.list[ind][i].key === key) {
            this.list[ind].splice(i, 1);
            break;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */