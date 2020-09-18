/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreakD = function(s, wordDict) {
    const map = {};
    
    for (let i = 0; i < wordDict.length; ++i) {
        map[wordDict[i]] = wordDict[i];
    }
    
   return dfs(0, s, map, {});
};

const dfs = (start, s, map, memo) => {
    if (start >= s.length) {
        memo[start] = false;
        return false;
    }
    
    if (map[s.substring(start)]) {
        memo[start] = true;
        return true;
    }
    
    if (memo[start] !== undefined) {
        return memo[start];
    }
    
    for (let i = start + 1; i <= s.length; ++i) {
        if (map[s.substring(start, i)] && dfs(i, s, map, memo)) {
            memo[start] = true;
            return true;
        }
    }
    
    memo[start] = false;
    
    return false;
}

// DP
var wordBreak = function(s, wordDict) {
    const map = {};
    
    for (let i = 0; i < wordDict.length; ++i) {
        map[wordDict[i]] = wordDict[i];
    }
    
    const dp = new Array(s.length + 1);
    
    dp[0] = true;
    
    for (let i = 1; i <= s.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (dp[j] && map[s.substring(j, i)]) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return !!dp[s.length];
}
