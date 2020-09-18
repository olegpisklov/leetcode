/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s || !s.length) {
        return 0;
    }
    
    const map = {};
    let maxLen = 0;
    let j = 0;
    
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        
        if (map[char] !== undefined) {
            j = Math.max(map[char] + 1, j) ;
        }
        
        maxLen = Math.max(maxLen, i - j + 1);
        map[char] = i;
    }

    return maxLen;
};