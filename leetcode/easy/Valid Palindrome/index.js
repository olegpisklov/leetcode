/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    
    let start = 0;
    let end = s.length -1;
    
    while (start < end) {
        if (!isLetter(s[start]) && !isDigit(s[start])) {
            ++start;
            continue;
        }
        if (!isLetter(s[end]) && !isDigit(s[end])) {
            --end;
            continue;
        }
        if (s[start] !== s[end]) {
            return false;
        }
        ++start;
        --end;
    }
    
    return true;
};

const isLetter = (char) => {
    return char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
}

const isDigit = (char) => {
    return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
}