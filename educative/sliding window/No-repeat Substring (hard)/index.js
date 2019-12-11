const non_repeat_substring = function(str) {
    let maxCount = 0;
    let start = 0;
    const uniqueChars = new Set();
    
    for (let i = 0; i < str.length; ++i) {
      if (uniqueChars.has(str[i])) {
        start = i;
        continue;
      }
  
      uniqueChars.add(str[i]);
      maxCount = Math.max(maxCount, i + 1 - start);
    }
  
    return maxCount;
  };
  