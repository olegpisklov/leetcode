
var subsets = function(nums) {
    const list = [[]];
    
    for (let i = 0; i < nums.length; ++i) {
        const len = list.length;
        
        for (let j = 0; j < len; ++j) {
            const copy = [...list[j]];
            copy.push(nums[i]);
            list.push(copy);
        }
    }
    
    return list;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsOld = function(nums) { // with linked list
    const list = new LinkedList();
    
    list.addToHead([]);
    
    for (let i = 0; i < nums.length; ++i) {
        const len = list.length;
        let pointer = list.head;
        let j = 0;
        
        while (j < len) {
            const newVal = [...pointer.val, nums[i]];
            list.addToTail(newVal);
            pointer = pointer.next;
            ++j;
        }
    }
    
    return list.convertToArray();
};