/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
const MOD = 10**9 + 7;

var numRollsToTarget = function(d, f, target) {
    const memo = {};
    
    return dp(d, f, target, memo) % MOD;
};

const dp = (d, f, target, memo) => {
    if (d === 0) {
        return target === 0 ? 1 : 0;
    }

    if (memo[d + '#' + target] !== undefined) {
        return memo[d + '#' + target];
    }
    
    let res = 0;
    for (let i = 1; i <= f && target - i >= 0; ++i) {
        res += dp(d - 1, f, target - i, memo);
    }
    memo[d + '#' + target] = res % MOD;
    
    return res;
}