/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);
    
    let counter = 0;
    let j = 0;
    
    for (let i = 0; i < g.length; ++i) {
        if (g[i] <= s[j]) {
            ++counter;
            ++j;
        }
    }
    
    return counter;
};