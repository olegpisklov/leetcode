/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s || !s.length) {
        return 0;
    }
    
    const str = s.replace(/ /g, '');
    
    let num = 0;
    let result = 0;
    const stack = [];
    let prevSign = '+';
    
    for (let i = 0; i < str.length; ++i) {
        const char = str[i];
        
        if (isDigit(char)) {
            num = num * 10 + parseInt(str[i]);
        }

        if (!isDigit(char) || i === str.length - 1) {
            if (prevSign === '+') {
                stack.push(num);
            } else if (prevSign === '-') {
                stack.push(-num);
            } else if (prevSign === '*') {
                stack.push(stack.pop() * num);      
            } else if (prevSign === '/') {
                const first = stack.pop();
                stack.push(first > 0 ? Math.floor(first / num) : Math.ceil(first / num));
            }
            num = 0;
            prevSign = char;
        }
    }
    
    return stack.reduce((res, i) => res + i, 0);
};

const isDigit = (s) => s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57