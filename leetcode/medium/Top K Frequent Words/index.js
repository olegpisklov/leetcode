/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = {};
    
    for (let i = 0; i < words.length; ++i) {
        if (map[words[i]]) {
            map[words[i]] += 1;
        } else {
            map[words[i]] = 1;
        }
    }
    
    const res = [];
    const keys = Object.keys(map);
    
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        res.push([key, map[key]]);
    }
    
    res.sort((a, b) => {
        if (b[1] < a[1]) {
            return -1;
        }
        if (b[1] > a[1]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    });
        
    return res.map(a => a[0]).splice(0, k);
    
};
