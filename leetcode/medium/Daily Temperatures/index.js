/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const stack = [];
    const res = new Array(T.length);
    
    res.fill(0);
    
    for (let i = 0; i < T.length; ++i) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = i - top;
        }
        
        stack.push(i);
    }
  
    return res;
};