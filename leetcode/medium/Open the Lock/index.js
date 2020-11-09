/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) { // bidirectional BFS
    const visited = new Set(deadends);
    
    let begin = new Set(['0000']);
    let end = new Set([target]);
    let level = 0;

    while(begin.size) {
        const temp = new Set();

        for (let str of begin.keys()) {            
            if (end.has(str)) return level;

            if (visited.has(str)) continue;
            
            visited.add(str);
            
            for (let j = 0; j < 4; ++j) {
                const arrStr = str.split('');
                let num = parseInt(arrStr[j]);
                
                arrStr[j] = num === 9 ? 0 : num + 1;
                let newStr = arrStr.join('');
                
                if (!visited.has(newStr)) {
                    temp.add(newStr);
                }
                
                arrStr[j] = num === 0 ? 9 : num - 1;
                newStr = arrStr.join('');
                
                if (!visited.has(newStr)) {
                    temp.add(newStr);
                }
            }
        }
        
        ++level;
        
        begin = end;
        end = temp;
    }
    
    return -1;
};


var openLockQ = function(deadends, target) { // regular BFS
    const visited = new Set(deadends);
    
    const q = ['0000'];
    let level = 0;

    while(q.length) {
        const len = q.length;

        for (let i = 0; i < len; ++i) {
            const str = q.shift();
            
            if (str === target) return level;

            if (visited.has(str)) continue;
            
            visited.add(str);
            
            for (let j = 0; j < 4; ++j) {
                const arrStr = str.split('');
                let num = parseInt(arrStr[j]);
                
                arrStr[j] = num === 9 ? 0 : num + 1;
                let newStr = arrStr.join('');
                
                if (!visited.has(newStr)) {
                    q.push(newStr);
                }
                
                arrStr[j] = num === 0 ? 9 : num - 1;
                newStr = arrStr.join('');
                
                if (!visited.has(newStr)) {
                    q.push(newStr);
                }
            }
        }
        
        ++level;
    }
    
    return -1;
};
