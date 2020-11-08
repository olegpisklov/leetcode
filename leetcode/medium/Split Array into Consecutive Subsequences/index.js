/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let freqMap = getFreqMap(nums);
    let tailsMap = new TailsMap();
    
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];

        if (freqMap[num] === 0) {
            continue;
        } else if (tailsMap.get(num) > 0) { // if we can continue the sequence, we do
            tailsMap.add(num, -1);
            tailsMap.add(num + 1, 1);
        } else if (freqMap[num + 1] > 0 && freqMap[num + 2] > 0) { // if we can not continue the sequence, we try to start a new sequence
            --freqMap[num + 1];
            --freqMap[num + 2];
            tailsMap.add(num + 3, 1);
        } else {
            return false;
        }
        
        --freqMap[num];
    }
    
    return true;
};

const getFreqMap = (nums) => {
    let freqMap = {};
    
    for (let i = 0; i < nums.length; ++i) {
        if (freqMap[nums[i]] === undefined) {
            freqMap[nums[i]] = 1;
        } else {
            freqMap[nums[i]] += 1;
        }
    }
    
    return freqMap;
}

class TailsMap {
    constructor() {
        this.map = {};
    }
    
    add(num, count) {
        if (this.map[num] === undefined) {
            this.map[num] = count;
        } else {
            this.map[num] += count;
        }
    }
    get(num) {
        return this.map[num];
    }
}