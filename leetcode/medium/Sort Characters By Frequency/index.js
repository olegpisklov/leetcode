/**
 * @param {string} s
 * @return {string}
 */
// 'tree'
// {
//     t: 1,
//     r: 1,
//     e: 2
// }

// [null, [t, r], [e], null, null]

var frequencySort = function(s) {
    const frequencyMap = getFrequencyMap(s); // O(n)
    const frequencyBucket = getFrequencyBucket(frequencyMap, s.length + 1); // O(n)

    return sortByFrequencyBucket(frequencyBucket); // O(n)
};

const getFrequencyMap = (str) => {
    const map = {};
    
    for (let i = 0; i < str.length; ++i) {
        const char = str[i];
        
        if (map[char] !== undefined) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    }
    
    return map;
}

const getFrequencyBucket = (frequencyMap, size) => {
    const bucket = new Array(size);
    
    for (let char in frequencyMap) {
        const index = frequencyMap[char];
        
        if (bucket[index] !== undefined) {
            bucket[index].push(char);
        } else {
            bucket[index] = [char];
        }
    }
    
    return bucket;
}

const sortByFrequencyBucket = (frequencyBucket) => {
    let str = '';
    
    for (let i = frequencyBucket.length - 1; i >= 0; --i) {
        if (frequencyBucket[i] === undefined) {
            continue;
        }
        
        for (let j = 0; j < frequencyBucket[i].length; ++j) {
            const char = frequencyBucket[i][j];
            
            for (let k = 0; k < i; ++k) {
                str += char;
            }
        }    
    }
    
    return str;
}