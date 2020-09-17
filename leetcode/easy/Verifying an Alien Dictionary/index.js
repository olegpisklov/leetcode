/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const dict = {};
    
    for (let i = 0; i < order.length; ++i) {
        dict[order[i]] = i;
    }
    
    for (let i = 1; i < words.length; ++i) {
        if (!isInOrder(words[i - 1], words[i], dict)) {
            return false;
        }
    }
    
    return true;
};

const isInOrder = (w1, w2, dict) => {
    let i = 0;
    
    while (w1[i] === w2[i] && i < Math.min(w1.length, w2.length)) {
        ++i;
    }
    
    if (i === w1.length) {
        return true;
    }
    
    if (i === w2.length) {
        return false;
    }
    
    return dict[w1[i]] < dict[w2[i]];
}