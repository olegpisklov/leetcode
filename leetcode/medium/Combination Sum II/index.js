/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b); // avoid duplicates, optimization
    
    helper(candidates, 0, target, [], result);
    
    return result;
};

const helper = (candidates, ind, sum, path, result) => {
    if (sum === 0) {
        result.push([...path]);
        return;
    }
    
    for (let i = ind; i < candidates.length; ++i) {
        if (i > ind && candidates[i] === candidates[i - 1]) continue; // avoid duplicates
        if (candidates[i] > sum) break; // optimization
        
        path.push(candidates[i]);
        helper(candidates, i + 1, sum - candidates[i], path, result);
        path.pop();
    }
}