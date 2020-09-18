/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticksH = function(sticks) {
    const heap = new MinHeap(sticks);
    let cost = 0;
    
    while (heap.values.length !== 1) {
        const sum = heap.pop() + heap.pop();
        
        heap.add(sum);
        cost += sum;
    }
    
    return cost;
};


class MinHeap {
    constructor(values) {
        this.values = values.sort((a, b) => b - a);
    }
    pop() {
        return this.values.pop();
    }
    add(val) {
        this.values.push(val);
        this.values.sort((a, b) => b - a);
    }
    isEmpty() {
        return !this.values.length;
    }
}

var connectSticks = function(sticks) {
    const sums = [];
    let result = 0;
    
    sticks.sort((a, b) => b - a);
    
    while (sticks.length >= 0 || sums.length >= 1) {
        const a = pickMin(sticks, sums);
        const b = pickMin(sticks, sums);
        
        if (a === null || b === null) {
            break;
        }
        
        const sum = a + b;
        
        sums.unshift(sum);
        result += sum
    }
    
    return result;
}

const pickMin = (arr1, arr2) => {
    if (!arr1.length && !arr2.length) {
        return null;
    }
    
    if (!arr1.length) {
        return arr2.pop();
    }
    
    if (!arr2.length) {
        return arr1.pop();
    }
    
    return arr1[arr1.length - 1] < arr2[arr2.length - 1] ? arr1.pop() : arr2.pop();
}