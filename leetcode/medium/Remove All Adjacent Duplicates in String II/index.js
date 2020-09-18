/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    
    for (let i = 0; i < s.length; ++i) {
        const last = stack[stack.length - 1];
   
        if (last && last.val === s[i]) {
            last.counter += 1;
            
            if (last.counter >= k) {
                stack.pop();
                continue;
            }
        } else {
            stack.push({
                val: s[i],
                counter: 1
            });    
        }
    }
    
    let res = '';
    
    for (let i = 0; i < stack.length; ++i) {
        for (let j = 0; j < stack[i].counter; ++j) {
            res += stack[i].val;
        }    
    }
    
    return res;
};