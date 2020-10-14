/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const arr = s.split('');
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                arr[i] = '';
            }
        }
    }
    
    while(stack.length) {
        arr[stack.pop()] = '';
    }
    
    return arr.join('');
}

var minRemoveToMakeValidMy = function(s) {
    const opened = [];
    const toRemove = [];
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            opened.push(i);
        } else if (s[i] === ')') {
            if (opened.length) {
                opened.pop();
            } else {
                toRemove.push(i);
            }
        }
    }
    
    for (let i = 0; i < opened.length; ++i) {
        toRemove.push(opened[i]);
    }
    
    if (toRemove.length === s.length) {
        return '';
    }
    
    let res = '';
    let prev = 0;
    
    for (let i = 0; i < toRemove.length; ++i) {
        res += s.substring(prev, toRemove[i]);
        prev = toRemove[i] + 1;
    }
    
    res += s.substring(prev);
    
    return res;
};