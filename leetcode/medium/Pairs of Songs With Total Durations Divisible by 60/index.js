/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const map = {};
    let res = 0;
    
    for (let i = 0; i < time.length; ++i) {
        const mod = time[i] % 60;
        
        if (mod === 0 && map[mod] !== undefined) {
            res += map[mod];
        } else if (map[60 - mod] !== undefined) {
            res += map[60 - mod];
        }
        
        if (map[mod] === undefined) {
            map[mod] = 0;    
        }
        
        map[mod] += 1;
    }
    
    return res;
};