/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {    
    return step(steps, 0, arrLen, steps/2, {});
};

const step = (steps, index, len, limit, memo) => {
    if (index < 0 || index === len || steps < 0 || index > limit) {
        return 0 ;
    }
    if (steps === 0 && index === 0) {    
        return 1;
    }
    if (memo[steps] !== undefined && memo[steps][index] !== undefined) {
        return memo[steps][index];
    }
    
    const res1 = step(steps - 1, index + 1, len, limit, memo);
    const res2 = step(steps - 1, index - 1, len, limit, memo);
    const res3 = step(steps - 1, index, len, limit, memo);
    const res = (res1 + res2 + res3) % (10**9 + 7);
    
    if (memo[steps] === undefined) {
        memo[steps] = {[index]: res};
    } else {
        memo[steps][index] = res;
    }

    return res;
}