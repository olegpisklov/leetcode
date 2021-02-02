/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    const groups = {};
    
    for (let i = 0; i < text.length; ++i) {
        const char = text[i];
        
        if (groups[char] === undefined) {
            groups[char] = [i];
        } else {
            groups[char].push(i);
        }
    }
    
    let res = 0;
    
    for (let char in groups) {
        const group = groups[char];
        let sum = 0;
        let cur = 1;
        let prev = 0;
        
        for (let i = 1; i < group.length; ++i) {
            if (group[i] - group[i - 1] === 1) {
                ++cur;
            } else if (group[i] - group[i - 1] === 2) {
                prev = cur;
                cur = 1;
            } else {
                prev = 0;
                cur = 1;
            }
            
            sum = Math.max(sum, cur + prev);
        }
        
        res =  Math.max(res, sum + (sum < group.length ? 1 : 0)); // "aaaba" || "aaababba"
    }
    
    return res;
};