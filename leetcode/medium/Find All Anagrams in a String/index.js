/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

//           ^
//         ^
// "cbaebabacd"
// "abc"

// a: 1
// b: 0
// c: 0

// counter: 1
// result: [0, 6]

// O(s + p)
var findAnagrams = function(s, p) {
    const pCounts = {};
    
    for (let i = 0; i < p.length; ++i) {
        const char = p[i];
        
        pCounts[char] = pCounts[char] === undefined ? 1 : pCounts[char] + 1;
    }
    
    const result = [];
    let counter = Object.keys(pCounts).length;
    
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        const char = s[right];
        
        if (pCounts[char] !== undefined) {
            --pCounts[char];
            
            if (pCounts[char] === 0) {
                --counter;
            }
        }
        
        ++right;
        
        while (counter === 0) {
            if (right - left === p.length) {
                result.push(left);
            }
            
            const leftChar = s[left];
            
            if (pCounts[leftChar] !== undefined) {
                ++pCounts[leftChar];

                if (pCounts[leftChar] > 0) {
                    ++counter;
                }
            }
            
            ++left;
        }
    }
    
    return result;
}

// O(s * p)
var findAnagramsMy = function(s, p) {
    const pCounts = {};
    
    for (let i = 0; i < p.length; ++i) {
        const char = p[i];
        
        pCounts[char] = pCounts[char] === undefined ? 1 : pCounts[char] + 1;
    }
    
    let j = 0;
    const sCounts = {};
    const result = [];
    
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        
        sCounts[char] = sCounts[char] === undefined ? 1 : sCounts[char] + 1;
        
        if (i - j + 1 === p.length) {
            if (isEqual(pCounts, sCounts)) {
                result.push(j);
            }
            
            sCounts[s[j]] -= 1;
            
            if (sCounts[s[j]] === 0) {
                delete sCounts[s[j]];
            }
            ++j;
        }
    }
    
    return result;
};

const isEqual = (pCounts, sCounts) => {
    const pChars = Object.keys(pCounts);

    for (let i = 0; i < pChars.length; ++i) {
        const char = pChars[i];
        
        if (pCounts[char] !== sCounts[char]) return false;
    }
    
    return true;
}