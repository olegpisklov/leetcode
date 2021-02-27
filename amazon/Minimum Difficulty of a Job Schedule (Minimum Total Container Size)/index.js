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
    
    let maxDifficulty = jobDifficulty[ind];
    let minSum = Number.MAX_SAFE_INTEGER;
    
    for (let i = ind; i < jobDifficulty.length; ++i) {
        maxDifficulty = Math.max(maxDifficulty, jobDifficulty[i]);
        
        const curMin = helper(jobDifficulty, d - 1, i + 1, memo);
        
        if (curMin !== -1) {
            minSum = Math.min(minSum, curMin + maxDifficulty);
        }
    }
    
    memo[ind][d] = minSum;
    
    return minSum;
}

// Time: O(n*d) Space: O(n*d)

console.log(minDifficulty([10, 2, 20, 5, 15, 10, 1], 3));
console.log(minDifficulty([10, 2, 20, 5, 15, 10, 1], 5));
console.log(minDifficulty([5, 4, 2, 4, 3, 4, 5, 4], 4));
console.log(minDifficulty([22, 12, 1, 14, 17], 2));

/**
 *  Input: jobDifficulty = [6,5,4,3,2,1], d = 2
    Output: 7
    Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
    Second day you can finish the last job, total difficulty = 1.
    The difficulty of the schedule = 6 + 1 = 7 
    Example 2:
    
    Input: jobDifficulty = [9,9,9], d = 4
    Output: -1
    Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.
    Example 3:
    
    Input: jobDifficulty = [1,1,1], d = 3
    Output: 3
    Explanation: The schedule is one job per day. total difficulty will be 3.
    Example 4:
    
    Input: jobDifficulty = [7,1,7,1,7,1], d = 3
    Output: 15
    Example 5:
    
    Input: jobDifficulty = [11,111,22,222,33,333,44,444], d = 6
    Output: 843
 */

console.log(minDifficulty([6,5,4,3,2,1], 2)); // 7
console.log(minDifficulty([9,9,9], 4)); // -1
console.log(minDifficulty([1,1,1], 3)); // 3
console.log(minDifficulty([7,1,7,1,7,1], 3)); // 15
console.log(minDifficulty([11,111,22,222,33,333,44,444], 6)); // 843
