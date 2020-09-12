/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    const sArr = splitToArr(S);
    let counter  = 0;
    
    for (let i = 0; i < words.length; ++i) {
        const wArr = splitToArr(words[i]);
        
        if (sArr.length !== wArr.length) {
            continue;
        }
        
        let stretchy = true;
        
        for (let j = 0; j < sArr.length; ++j) {
            if (sArr[j][0] !== wArr[j][0] || 
                sArr[j].length < wArr[j].length || 
                sArr[j].length > wArr[j].length && sArr[j].length < 3) {
                
                stretchy = false;
                break;
            }
        }
        
        if (stretchy) {
            ++counter;
        }
    }
    
    return counter;
};

const splitToArr = (word) => {
    const arr = [];
    let str = '';
    
    for (let i = 0; i < word.length; ++i) {
        str += word[i];
        
        if (word[i] !== word[i + 1]) {
            arr.push(str);
            str = '';
        }
    }
    
    return arr;
}