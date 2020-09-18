/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = {}
    
    for (let i = 0; i < arr2.length; ++i) {
        map[arr2[i]] = i;
    }
    
    arr1.sort((a, b) => {
        const aExists = map[a] !== undefined;
        const bExists = map[b] !== undefined;
        
        if (!aExists && !bExists) {
            return a - b;
        }
        
        if (aExists && !bExists) {
             return -1;
        }
        
        if (!aExists && bExists) {
             return 1;
        }
        
        if (map[a] < map[b]) {
            return -1;
        }
        
        if (map[a] > map[b]) {
            return 1;
        }
        
        return 0;
    });
    
    return arr1;
};