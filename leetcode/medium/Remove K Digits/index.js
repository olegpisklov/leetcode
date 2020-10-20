/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (!num || !num.length) {
        return '';
    }
    
    const stack = [];

	for (let i = 0; i < num.length; ++i) {
        while (stack.length && stack[stack.length - 1] > num[i] && k > 0) {
            stack.pop();
            --k;
        }
        if (!stack.length && num[i] === '0') { // avoid trailing zeros
            continue;
        }
        
        stack.push(num[i]);
    }
    
    while (stack.length && k > 0) {
        stack.pop();
        --k;
    }
    
    if (!stack.length) return '0';

    return stack.join(''); // we can use deque, or reverse the result
};