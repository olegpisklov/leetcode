/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const frequencyMap = createWordsFrequencyMap(paragraph);
    for (let i = 0; i < banned.length; ++i) {
        if (frequencyMap[banned[i]] !== undefined) {
            delete frequencyMap[banned[i]];
        }
    }
    const frequencyArr = [];
    const keys = Object.keys(frequencyMap);
    
    for (let i = 0; i < keys.length; ++i) {
        frequencyArr.push([keys[i], frequencyMap[keys[i]]]);
    }
    
    frequencyArr.sort((a, b) => b[1] - a[1]);

    return frequencyArr[0][0];
    
};

const createWordsFrequencyMap = (str) => {
    const lower = str.toLowerCase();
    const map = {};
    const strArr = lower.split(/[ !?',;.]+/);
    const specialSymbols = ['!', '?', "'", ';', '.', ','];
    
    for (let i = 0; i < strArr.length; ++i) {
        let word = strArr[i];
        
        if (map[word] !== undefined) {
            map[word] += 1;
        } else {
            map[word] = 1;
        }
    }
    
    return map;
}