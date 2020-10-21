var backspaceCompare = function(s1, s2) {
    let p1 = s1.length - 1;
    let p2 = s2.length - 1;

    let sharpCounter1 = 0;
    let sharpCounter2 = 0;

    while (p1 >= 0 || p2 >= 0) {
        // move first pointer until we can, up to the letter or -1
        while (p1 >= 0) {
            if (s1[p1] === '#') {
                ++sharpCounter1;
                --p1;
            } else if (sharpCounter1 > 0) {
                --p1;
                --sharpCounter1;
            } else {
                break;
            }
        }

        // move second pointer until we can, up to the letter or -1
        while (p2 >= 0) {
            if (s2[p2] === '#') {
                ++sharpCounter2;
                --p2;
            } else if (sharpCounter2 > 0) {
                --p2;
                --sharpCounter2;
            } else {
                break;
            }
        }

        if (s1[p1] === s2[p2] && s2[p2] !== '#') {
            --p1;
            --p2;
        } else {
            return false;
        }
    }

    return true;
};

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