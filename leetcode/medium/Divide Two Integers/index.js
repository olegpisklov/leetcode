/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

const MAX_INT = 2147483647;

var divide = function(dividend, divisor) {
    if (divisor === 1) return dividend;
    
    let isNegative = false;
    
    if (dividend < 0 && divisor > 0 || divisor < 0 && dividend > 0) {
        isNegative = true;
    }
    
    let absDivisor = Math.abs(divisor);
    let absDividend = Math.abs(dividend);
    
    let res = 0; // how many absDivisor's in absDividend
    
    while (absDivisor <= absDividend) {
        let step = absDivisor;
        let val = 1;
        
        while (step + step <= absDividend) { // try to speed up the process by doubling steps
            step += step;
            val += val;
        }
        
        absDividend = absDividend - step;
        res += val;
    }
        
    res = isNegative ? -res : res;
    
    return res > MAX_INT ? MAX_INT : res;
};