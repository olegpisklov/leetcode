/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    if (d > jobDifficulty.length) {
        return -1;
    }
    
    const memo = new Array(jobDifficulty.length).fill(0)
        .map(i => new Array(d + 1).fill(null));
    
    const res = helper(jobDifficulty, d, 0, memo);

    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};

const helper = (jobDifficulty, d, ind, memo) => {
    if (ind === jobDifficulty.length && d === 0) {
        return 0;
    }
    if (d === 0 || ind >= jobDifficulty.length) {
        return -1;
    }
    if (memo[ind][d] !== null) {
        return memo[ind][d];
    }
    
    let dayMax = jobDifficulty[ind];
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = ind; i < jobDifficulty.length; ++i) {
        dayMax = Math.max(dayMax, jobDifficulty[i]);
        
        const curMin = helper(jobDifficulty, d - 1, i + 1, memo);
        
        if (curMin !== -1) {
            min = Math.min(min, curMin + dayMax);
        }
    }
    
    memo[ind][d] = min;
    
    return min;
}

console.log(minDifficulty([10, 2, 20, 5, 15, 10, 1], 3))
console.log(minDifficulty([10, 2, 20, 5, 15, 10, 1], 5))
console.log(minDifficulty([5, 4, 2, 4, 3, 4, 5, 4], 4))
console.log(minDifficulty([22, 12, 1, 14, 17], 2))