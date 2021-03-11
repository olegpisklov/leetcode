/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) { // bottom up, O(nm)
    const n = word1.length + 1;
    const m = word2.length + 1;
    const dp = new Array(n).fill(0).map(i => 
         new Array(m).fill(Number.MAX_SAFE_INTEGER));
    
    for (let i = 0; i < n; ++i) {
        dp[i][0] = i;
    }
    for (let j = 0; j < m; ++j) {
        dp[0][j] = j;
    }
    
    for (let i = 1; i < n; ++i) {
        for (let j = 1; j < m; ++j) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                const ins = dp[i][j - 1];
                const del = dp[i - 1][j];
                const repl = dp[i - 1][j - 1];

                dp[i][j] = Math.min(ins, del, repl) + 1;
            };
        }
    }
    
    return dp[n - 1][m - 1];
}

var minDistanceTD = function(word1, word2) { // top down, O(nm)
    const n = word1.length;
    const m = word2.length;
    const memo = new Array(n).fill(0).map(i => 
         new Array(m).fill(Number.MAX_SAFE_INTEGER));
    
    return helper(word1, word2, 0, 0, memo);
};

const helper = (w1, w2, i, j, memo) => {
    if (i === w1.length) {
        return w2.length - j;
    }
    if (j === w2.length) {
        return w1.length - i;
    }
    if (memo[i][j] !== Number.MAX_SAFE_INTEGER) {
        return memo[i][j];
    }
    
    if (w1[i] === w2[j]) {
        memo[i][j] = helper(w1, w2, i + 1, j + 1, memo);
    } else {
        const ins = helper(w1, w2, i, j + 1, memo);
        const del = helper(w1, w2, i + 1, j, memo);
        const repl = helper(w1, w2, i + 1, j + 1, memo);

        memo[i][j] = Math.min(ins, del, repl) + 1;
    }
    
    return memo[i][j];
}