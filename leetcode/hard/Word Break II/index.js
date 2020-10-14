/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    return helper(s, wordDict, {});
};

const helper = (str, wordDict, memo) => {
    if (str === '') {
        return [''];
    }
    if (memo[str] !== undefined) {
        return memo[str];
    }
    
    let result = [];
    
    for (let i = 0; i < wordDict.length; ++i) {
        if (!str.startsWith(wordDict[i])) {
            continue;
        }
        
        const subRes = helper(str.substring(wordDict[i].length), wordDict, memo);
        
        for (let j = 0; j < subRes.length; ++j) {
            const delimiter = subRes[j].length ? ' ' : '';
            
            result.push(wordDict[i] + delimiter + subRes[j]);
        }
    }
    
    memo[str] = result;

    return result;
}
