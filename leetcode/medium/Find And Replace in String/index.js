/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */

var findReplaceString = function(S, indexes, sources, targets) {
    const map = {}; // key is a valid start index of S for replacement, value is an index of source and target
    
    for (let i = 0; i < indexes.length; ++i) {
        const ind = indexes[i];
        
        if (S.startsWith(sources[i], ind)) {
            map[ind] = i;
        }
    }
    
    let res = '';

    for (let i = 0; i < S.length;) {
        if (map[i] !== undefined) {
            res += targets[map[i]];
            i += sources[map[i]].length;
        } else {
            res += S[i];
            ++i;
        }
    }
    
    return res;
};

console.log(findReplaceString("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]))