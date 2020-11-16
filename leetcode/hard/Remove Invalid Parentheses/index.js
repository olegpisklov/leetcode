/**
 * @param {string} s
 * @return {string[]}
 */

var removeInvalidParentheses = function(s) {
    let openToRemove = 0;
    let closedToRemove = 0;
    let openCounter = 0;
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === ')' && openCounter === 0) {
            ++closedToRemove;
        } else if (s[i] === ')' && openCounter > 0) {
            --openCounter;
        } else if (s[i] === '(') {
            ++openCounter;
        }
    }
    
    openToRemove += openCounter;

    const valid = new Set();
    const processed = new Set();
    
    myDfs(s, openToRemove, closedToRemove, valid, processed);
    
    return Array.from(valid);
}

const myDfs = (s, openToRemove, closedToRemove, valid, processed) => {
    if (processed.has(s)) {
        return;
    }
    
    if (openToRemove === 0 && closedToRemove === 0) {
        processed.add(s);
        
        if (isValid(s)) {
            valid.add(s);
        }
        return;
    }
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(' && openToRemove > 0) {
            const newStr = s.substring(0, i) + s.substring(i + 1);
            myDfs(newStr, openToRemove - 1, closedToRemove, valid, processed);
            processed.add(newStr);
        } else if (s[i] === ')' && closedToRemove > 0) {
            const newStr = s.substring(0, i) + s.substring(i + 1);
            myDfs(newStr, openToRemove, closedToRemove - 1, valid, processed);
            processed.add(newStr);
        }
    }
    
    processed.add(s);
}

const isValid = (s) => {
    let openCounter = 0;
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === ')' && openCounter === 0) {
            return false;
        } else if (s[i] === ')' && openCounter > 0) {
            --openCounter;
        } else if (s[i] === '(') {
            ++openCounter;
        }
    }
    
    return openCounter === 0;
}
