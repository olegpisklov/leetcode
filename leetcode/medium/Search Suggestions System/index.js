/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProductsBrut = function(products, searchWord) {
    products.sort((a, b) => a < b ? -1 : 1);
    
    const groups = [];
    
    for (let i = 0; i < searchWord.length; ++i) {
        const group = [];
        const inGroup = {};
        
        for (let j = 0; j < products.length; ++j) {
            const product = products[j];
            
            if (inGroup[product] !== undefined) {
                continue   
            }
            if (group.length === 3) {
                break;
            }
            
            let match = true;
            
            for (let k = 0; k <= i; ++k) {
                if (searchWord[k] !== product[k]) {
                    match = false;
                    break;
                }
            }
            
            if (match) {
                group.push(product);
                inGroup[product] = true;
            }
        }
        
        groups.push(group);
    }
    
    return groups
};

var suggestedProducts = function(products, searchWord) {
    products.sort((a, b) => a < b ? -1 : 1);
    
    const groups = [];
    let partSearch = '';
    
    for (let i = 0; i < searchWord.length; ++i) {
        partSearch += searchWord[i];
        const group = [];
        const insertInd = serchForIndex(products, partSearch);

        for (let j = insertInd; j < insertInd + 3 && j <  products.length; ++j) {
            if (products[j].startsWith(partSearch)) {
                group.push(products[j])
            }
        }
        
        groups.push(group);
    }
    
    return groups
};

const serchForIndex = (products, part) => {
    let start = 0;
    let end = products.length;
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
      
        if (part > products[mid]) {
            start = mid + 1; 
        } else {
            end = mid - 1;
        }
    }
    
    return start;
}