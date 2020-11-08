/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    const res = [];
    let isBlockOpened = false;
    let newStr = '';

    for (let i = 0; i < source.length; ++i) {
        let str = source[i];
        
        if (!isBlockOpened) {
            newStr = '';
        }
        
        for (let j = 0; j < str.length; ++j) {
            if (str.startsWith('//', j) && !isBlockOpened) {
                break;
            } else if (str.startsWith('/*', j) && !isBlockOpened) {
                isBlockOpened = true;
                ++j;
            } else if (isBlockOpened && str.startsWith('*/', j)) {
                isBlockOpened = false;
                ++j;
            } else if (!isBlockOpened) {
                newStr += str[j];
            }
        }

        if (newStr.length && !isBlockOpened) {
            res.push(newStr);
        }
    }
    
    return res;
};