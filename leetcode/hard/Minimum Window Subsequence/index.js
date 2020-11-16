/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
// S = "abcdebdde", T = "bde"
// Output: "bcde"

[
    {a: 0, c: 2, b: 1, d: 3, e: 4},
    {c: 2, b: 1, d: 3, e: 4},
    {c: 2, b: 5, d: 3, e: 4},
    {b: 5, d: 3, e: 4},
    {b: 5, d: 6, e: 4},
    {b: 5, d: 6, e: 8},
    {d: 6, e: 8},
    {d: 7, e: 8},
    {e: 8}
]

const  minWindow = function(S, T) {
    const closestIndexes = getClosestIndexes(S);
    let startInd = 0;
    let minLen = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < S.length; ++i) {
        if (S[i] !== T[0]) continue;

        if (i > S.length - T.length + 1) {
            break;
        }

        closestInd = closestIndexes[i];

        let start = i;
        let end = -1;

        for (let j = 1; j < T.length; ++j) {
            const char = T[j];

            if (closestInd[char] === undefined) {
                end = -1;
                break;
            }

            end = closestInd[char];
        }

        if (end - start + 1 < minLen) { 
            startInd = start;
            minLen = end - start + 1;
        }
    }

    return S.substring(startInd, startInd + minLen);
}

const getClosestIndexes = (str) => {
    const arr = new Array(str.length);
    const map = {};

    for (let i = str.length - 1; i >= 0; --i) {
        map[str[i]] = i;
        arr[i] = {...map};
    }

    return arr;
}


console.log(minWindow("abcdebdde", "bde"));



var minWindowOld = function(S, T) {
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