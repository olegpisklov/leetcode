/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// [1,1,1,2,2,3]
// {
//     1: 3, 
//     2: 2,
//     3: 1
// }
// [ ,[3], [2], [1], , , ]

// bucket sort, O(n)
var topKFrequent = function(nums, k) {
    const freqMap = getFreqMap(nums);
    const freqBucket = getFreqBucket(freqMap, nums.length + 1);
    
    let res = new Array(k);
    let j = 0;
    
    for (let i = freqBucket.length - 1; i >= 0; --i) {
        if (freqBucket[i] === undefined) {
            continue;
        }
        if (j === k) {
            break;
        }
        
        for (let l = 0; l < freqBucket[i].length; ++l) {
            res[j] = freqBucket[i][l];
            ++j;
            
            if (j === k) {
                break;
            }
        }
    }
    
    return res;
}

const getFreqBucket = (frequencyMap, size) => {
    const bucket = new Array(size);
    
    for (let num in frequencyMap) {
        const index = frequencyMap[num];
        
        if (bucket[index] !== undefined) {
            bucket[index].push(num);
        } else {
            bucket[index] = [num];
        }
    }
    
    return bucket;
}

// partition sort, O(n)
var topKFrequentPartition = function(nums, k) {
    if (nums.length === k) {
        return nums;
    }
    
    const freqMap = getFreqMap(nums);
    const freqArr = getFreqArr(freqMap);

    let left = 0;
    let right = freqArr.length - 1;
    
    while (left <= right) {
        const partitionIndex = partition(freqArr, left, right);
        
        if (partitionIndex === freqArr.length - k) {
            break;
        } else if (partitionIndex > freqArr.length - k) {
            right = partitionIndex - 1;
        } else {
            left = partitionIndex + 1;
        }
    }
    
    return freqArr.splice(freqArr.length - k)
        .map(freq => freq[0]);
};

const partition = (freqArr, start, end) => {
    const pivot = freqArr[start];
    let right = end;
    
    for (let i = end; i > start; --i) {
        if (freqArr[i][1] > pivot[1]) {
            const temp = freqArr[right];
            
            freqArr[right] = freqArr[i];
            freqArr[i] = temp;
            --right;
        }
    }
    
    freqArr[start] = freqArr[right];
    freqArr[right] = pivot;
    
    return right;
}

const getFreqMap = (nums) => {
    const map = {};
    
    for (let i = 0; i < nums.length; ++i) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1;
        }
    }
    
    return map;
}

const getFreqArr = (map) => {
    const resArr = [];
    
    for (let key in map) {
        resArr.push([parseInt(key), map[key]]);
    }
    
    return resArr;
}