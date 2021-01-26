/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    return dfs(arr, new Set(), 0);
};

const dfs = (arr, set, i) => {    
    if (i === arr.length) {
        return set.size;
    }
    
    const str = arr[i];
    const newSet = new Set(set);
    let canInsert = true;

    for (let j = 0; j < str.length; ++j) {
        const char = str[j];
        
        if (newSet.has(char)) {
            canInsert = false;
            break;
        }
        
        newSet.add(char);
    }
    
    const res1 = canInsert ? dfs(arr, newSet, i + 1) : 0;
    const res2 = dfs(arr, set, i + 1);
    
    return Math.max(res1, res2);
}

