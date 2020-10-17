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


// going backwards
var dailyTemperatures = function(T) {
    const stack = [];
    const result = new Array();
    
    for (let i = T.length - 1; i >= 0; --i) {
        while (stack.length && T[i] >= stack[stack.length - 1].val) {
            stack.pop();
        }
        
        result[i] = stack.length ? stack[stack.length - 1].index - i : 0;    
        
        stack.push({val: T[i], index: i}); // we can push only index
    }
    
    return result;
}