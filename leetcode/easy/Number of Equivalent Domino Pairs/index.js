/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const freq = {};
    
    for (let i = 0; i < dominoes.length; ++i) {
        const x = Math.min(dominoes[i][0], dominoes[i][1]);
        const y = Math.max(dominoes[i][0], dominoes[i][1]);
        const key = x + '#' + y;
        
        if (freq[key]) {
            freq[key] += 1;
        } else {
            freq[key] = 1;
        }
    }
    
    let res = 0
    const keys = Object.keys(freq);

    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        
        if (freq[key] > 1) {
            res += freq[key] * (freq[key] - 1) / 2;     
        }
        
    }

    return res;
};