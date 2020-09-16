/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const frequencyMap = {};
    
    for (let i = 0; i < s.length; ++i) {
        if (frequencyMap[s[i]]) {
            frequencyMap[s[i]] += 1;
        } else {
            frequencyMap[s[i]] = 1;
        }
    }
    
    for (let i = 0; i < s.length; ++i) {
        if (frequencyMap[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};