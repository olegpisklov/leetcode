/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    logs.sort((a, b) => {
        const a1 = a.split(' ');
        const b1 = b.split(' ');
        const isNumberLog = (str) => str.charCodeAt(0) < 58;
        
        if (isNumberLog(a1[1]) && isNumberLog(b1[1])) { 
            return 0;
        }
        
        if (isNumberLog(a1[1]) && !isNumberLog(b1[1])) { 
            return 1;
        }
        
        if (!isNumberLog(a1[1]) && isNumberLog(b1[1])) { 
            return -1;
        }
        
        if (!isNumberLog(a1[1]) && !isNumberLog(b1[1])) { 
            const str1 = a1.splice(1).join(' ');
            const str2 = b1.splice(1).join(' ');
            if (str1 < str2) {
                return -1;
            }
            if (str1 > str2) {
                return 1;
            }
            if (a1[0] < b1[0]) {
                return -1;
            }
            if (a1[0] > b1[0]) {
                return 1;
            }
            
        }
    });
    
    return logs;
};