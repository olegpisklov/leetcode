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
    
    let limit = 0;
    let prevLimit = -1;
    const result = [];
    
    for (let i = 0; i < S.length; ++i) {
        if (i > limit) {
            result.push(limit - prevLimit);
            prevLimit = limit;
            limit = indexesMap[S[i]];
        } else {
            limit = Math.max(limit, indexesMap[S[i]])
        }
    }
    
    result.push(limit - prevLimit);

    return result;
};