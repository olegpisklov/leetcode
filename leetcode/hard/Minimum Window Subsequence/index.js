/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
    let minLen = Number.MAX_SAFE_INTEGER;
    let res = '';
    
    const last = new Array(26);
    const next = new Array(S.length);
    
    last.fill(-1);

    for (let i = S.length - 1; i >= 0; --i) {
        next[i] = new Array(26);
        last[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
        
        for (let k = 0; k < 26; ++k) {
            next[i][k] = last[k];
        }
    }
            
    for (let i = 0; i < S.length; ++i) {
        if (S[i] !== T[0]) {
            continue;
        }
        
        let nextIndex = i;
        let j = 0;
        
        for (; j < T.length && nextIndex < next.length; ++j) {
            const letterIndex = T.charCodeAt(j) - 'a'.charCodeAt(0);

            nextIndex = next[nextIndex][letterIndex];

            if (nextIndex === -1) break;
            
            ++nextIndex;
        }
        
        if (j !== T.length) {
            continue;
        }
        
        const len = nextIndex - i;
        
        if (len < minLen) {
            minLen = len;
            res = S.substring(i, nextIndex);
        }        
    }
    
    return res;
};