const longest_substring_with_k_distinct = function(str, k) {
    const charsCountMap = {};
    let start = 0;
    let length = 0;
  
    for (let i = 0; i < str.length; ++i) {
      if (charsCountMap[str[i]]) {
        charsCountMap[str[i]] += 1; 
      } else {
        charsCountMap[str[i]] = 1;
      }
  
      if (Object.keys(charsCountMap).length > k) {  
        const leftChar = str[start];    
        charsCountMap[leftChar] -= 1;
  
        if (!charsCountMap[leftChar]) {
          delete charsCountMap[leftChar];
        }
  
        start++;
      }
  
      length = Math.max(length, i + 1 - start);
    }
  
    return length;
  };