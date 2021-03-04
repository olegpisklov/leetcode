/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = {};
    
    for (let i = 0; i < list1.length; ++i) {
        if (map[list1[i]] === undefined) {
            map[list1[i]] = i;
        }
    }
    
    let res = [];
    let indSum = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < list2.length; ++i) {
        if (map[list2[i]] !== undefined) {
            const curSum = i + map[list2[i]];
            
            if (curSum < indSum) {
                res = [list2[i]];
                indSum = curSum;
            } else if (curSum === indSum) {
                res.push(list2[i]);       
            }
        }
    }
    
    return res;
};