/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let num = 0;
    let curString = '';
    
    for (let i = 0; i < s.length; ++i) {
        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            num = num * 10 + parseInt(s[i]);
            
        } else if (s[i] === '[') {
            stack.push(curString);
            stack.push(num);
            num = 0;
            curString = '';
            
        } else if (s[i] === ']') {
            const num = stack.pop();
            const prevString = stack.pop();
            let res = '';
            
            for (let j = 0; j < num ; ++j) {
                res += curString;
            }
            
            curString = prevString + res;
            
        } else {
            curString += s[i];
        }
    }
    
    return curString;
};