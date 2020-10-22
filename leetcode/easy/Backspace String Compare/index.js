/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(s1, s2) {
    let p1 = s1.length - 1;
    let p2 = s2.length - 1;

    while (p1 >= 0 || p2 >= 0) {
        p1 = movePointerBack(s1, p1);
        p2 = movePointerBack(s2, p2);

        if (s1[p1] !== s2[p2]) {
            return false;
        }
        
        --p1;
        --p2;
    }

    return true;
};

// move pointer back as far as we can to the left
const movePointerBack = (str, ind) => {
    let sharpCounter = 0;
    
    while (str[ind] === '#' || sharpCounter > 0) {
        if (str[ind] === '#') {
            ++sharpCounter;
            --ind;
        } else if (sharpCounter > 0) {
            --ind;
            --sharpCounter;
        }
    }
    
    return ind;
}

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true
console.log(backspaceCompare('a##c', '#a#c')); // true
console.log(backspaceCompare('a#c', 'b')); // false

/**
 * Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:
Input: S = "a#c", T = "b"
Output: false

 */