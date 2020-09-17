/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left <= right) {
        if (s[left] === s[right]) {
            ++left;
            --right;
            continue;
        }
                
        return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    
    return true;
};

const isPalindrome = (s, start, end) => {
    while (start <= end) {
        if (s[start] !== s[end]) {
            return false;
        }
        
        ++start;
        --end;
    }
    
    return true;
}