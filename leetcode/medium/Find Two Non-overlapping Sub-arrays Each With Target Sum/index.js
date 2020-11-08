/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) { // O(n)
    const leftMinLens = new Array(arr.length).fill(-1);
    
    let sum = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    let start = 0;
    
    // for every i find min subarray length with sum === target on the left side from i
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
     
        while (sum > target) {
            sum -= arr[start];
            ++start;
        }
        
        if (minLen !== Number.MAX_SAFE_INTEGER) {
            leftMinLens[i] = minLen;
        }
          
        if (sum === target) {
            minLen = Math.min(minLen, i - start + 1);
            leftMinLens[i] = minLen;
        }
    }
    
    const rightMinLens = new Array(arr.length).fill(-1);
    
    sum = 0;
    minLen = Number.MAX_SAFE_INTEGER;
    let end = arr.length - 1;
    
    // for every i find min subarray length with sum === target on the right side from i
    for (let i = arr.length - 1; i >= 0; --i) {
        sum += arr[i];
     
        while (sum > target) {
            sum -= arr[end];
            --end;
        }
        
        if (minLen !== Number.MAX_SAFE_INTEGER) {
            rightMinLens[i] = minLen;
        }
          
        if (sum === target) {
            minLen = Math.min(minLen, end - i + 1);
            rightMinLens[i] = minLen;
        }
    }

    let minLens = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length - 1; ++i) {
        if (leftMinLens[i] !== -1 && rightMinLens[i + 1] !== -1) {
            minLens = Math.min(minLens, leftMinLens[i] + rightMinLens[i + 1]);
        }
    }
    
    return minLens === Number.MAX_SAFE_INTEGER ? -1 : minLens;
}



var minSumOfLengthsBrut = function(arr, target) { // O(n^2)
    let minLens = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length; ++i) {
        let len1 = findMinLen(arr, 0, i, target);
        let len2 = findMinLen(arr, i, arr.length, target);

        if (len1 !== -1 && len2 !== -1) {
            minLens = Math.min(minLens, len1 + len2);
        }
    }
    
    return minLens === Number.MAX_SAFE_INTEGER ? -1 : minLens;
};

const findMinLen = (arr, start, end, target) => {
    let sum = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    
    for (let j = start; j < end; ++j) {
        sum += arr[j];
     
        while (sum > target) {
            sum -= arr[start];
            ++start;
        }
          
        if (sum === target) {
            minLen = Math.min(minLen, j - start + 1);
        }
    }
    
    return minLen === Number.MAX_SAFE_INTEGER ? -1 : minLen;
}