/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const indexesMap = {};
    
    for (let i = 0; i < S.length; ++i) {
        if (indexesMap[S[i]] !== undefined) {
            indexesMap[S[i]] = i;
        } else {
            indexesMap[S[i]] = i;
        }
    }
    
    let right = 0;
    let left = 0;
    const result = [];
    
    for (let i = 0; i < S.length; ++i) {
        right = Math.max(right, indexesMap[S[i]])
        
        if (i === right) {
            result.push(right - left + 1);
            left = right + 1;
        }
    }
    
    return result;
};