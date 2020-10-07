/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeMy = function(x) {
    if (x < 0) {
        return false;
    }
    const arr = [];
    
    while (x >= 1) {
        if (x < 10) {
            arr.push(x);    
        } else {
            arr.push(x % 10);
        }
        
        x = Math.floor(x / 10);
    }
    
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        ++start;
        --end;
    }
    
    return true;    
};

var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    
    let revertedHalf = 0;
    
    while (x > revertedHalf) {
        revertedHalf = revertedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === revertedHalf || x === Math.floor(revertedHalf / 10);
}