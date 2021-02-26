/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);
    const strArr = paragraph.toLowerCase().replace(/[^a-z]/g, ' ').split(' ');
    const map = {};
    let maxFreq = 0;
    let maxFreqWord = '';
    
    for (let i = 0; i < strArr.length; ++i) {
        let word = strArr[i];
        
        if (word === '' || bannedSet.has(word)) continue;
        
        if (map[word] === undefined) {
            map[word] = 0;
        }
        
        map[word] += 1;
        
        if (map[word] > maxFreq) {
            maxFreq = map[word];
            maxFreqWord = word;
        }
    }
    
    return maxFreqWord;
}