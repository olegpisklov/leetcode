/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';
    
    while (i >= 0 || j >= 0) {
        const d1 = i < 0 ? 0 : num1[i] - '0';
        const d2 = j < 0 ? 0 : num2[j] - '0';
        const sum = carry + d1 + d2;
        
        carry = sum >= 10 ? 1 : 0
        result = (sum % 10).toString() + result;
        
        --i;
        --j;
    }
    
    if (carry) {
         result = '1' + result;
    }
    
    return result;
};