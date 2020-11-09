/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    const prefixSum = new Array(A.length + 1).fill(0);
    
    for (let i = 0; i < A.length; ++i) {
        prefixSum[i + 1] = prefixSum[i] + A[i];
    }
    
    const deque = [];
    let minLen = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < prefixSum.length; ++i) {
        while (deque.length && prefixSum[i] - prefixSum[deque[0]] >= K) {
            minLen = Math.min(minLen, i - deque[0]);
            deque.shift();
        }
        
        while (deque.length && prefixSum[deque[deque.length - 1]] >= prefixSum[i]) {
            deque.pop();
        }
        
        deque.push(i);
    }
    
    return minLen === Number.MAX_SAFE_INTEGER ? -1 : minLen;
};