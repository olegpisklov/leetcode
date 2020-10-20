/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
    const pCounts = {};
    
    for (let i = 0; i < p.length; ++i) {
        const char = p[i];
        
        pCounts[char] = pCounts[char] === undefined ? 1 : pCounts[char] + 1;
    }
    
    let j = 0;
    const sCounts = {};
    const result = [];
    
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        
        sCounts[char] = sCounts[char] === undefined ? 1 : sCounts[char] + 1;
        
        if (i - j + 1 === p.length) {
            if (isEqual(pCounts, sCounts)) {
                result.push(j);
            }
            
            sCounts[s[j]] -= 1;
            
            if (sCounts[s[j]] === 0) {
                delete sCounts[s[j]];
            }
            ++j;
        }
    }
    
    return result;
};

const isEqual = (pCounts, sCounts) => {
    const pChars = Object.keys(pCounts);

    for (let i = 0; i < pChars.length; ++i) {
        const char = pChars[i];
        
        if (pCounts[char] !== sCounts[char]) return false;
    }
    
    return true;
}