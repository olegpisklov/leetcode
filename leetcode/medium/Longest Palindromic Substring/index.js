/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeBrut = function(s) {
    if (!s || !s.length) {
        return s;
    }
    
    let res = s[0];
    
    for (let i = 0; i < s.length; ++i) {
        let s1 = s[i];
        for (let j = i + 1; j < s.length; ++j) {
            s1 = s[j] + s1;
            let s2 = s.substring(i, j + 1);
            
            if (s1 === s2) {
                res = s1.length > res.length ? s1 : res;
            }
        }    
    }
        
    return res;
};

var longestPalindrome = function(s) {
    if (!s || !s.length) {
        return s;
    }
    
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; ++i) {
        const len1 = expand(s, i, i);
        const len2 = expand(s, i, i + 1);
        const len = Math.max(len1, len2);
        
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
        
    return s.substring(start, end + 1);
};

const expand = (s, left, right) => {
    let l = left;
    let r = right;
    
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        --l;
        ++r;
    }

    return r - l - 1;
}