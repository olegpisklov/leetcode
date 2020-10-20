/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return helper('1', 1, n);
};

const helper = (str, ind, n) => {
    if (ind === n) {
        return str;
    }

    let newStr = '';
    let current = str[0];
    let counter = 1;
    
    for (let i = 1; i < str.length; ++i) {
        if (str[i] === current) {
            ++counter;
        } else {
            newStr += counter.toString() + current;
            current = str[i];
            counter = 1;
        }
    }
    
    newStr += counter.toString() + current;
    
    return helper(newStr, ind + 1, n);
}