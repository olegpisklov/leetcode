const find_permutation = function(str, pattern) {
    const patternMap = {};
    let windowStart = 0;
    let countLeft = pattern.length;
  
    for (let i = 0; i < pattern.length; ++i) {
      if (!patternMap[pattern[i]]) {
        patternMap[pattern[i]] = 0;
      }
  
      patternMap[pattern[i]] += 1;    
    }
  
    for (let i = 0; i < str.length; ++i) {
      if (patternMap[str[i]]) {
        patternMap[str[i]] -= 1;
        countLeft -= 1;
      } else {
        if (str[windowStart] in patternMap) {
          patternMap[str[windowStart]] += 1;
          countLeft += 1;
        }
  
        windowStart += 1;
      }
  
      if (!countLeft) {
        return true;
      }    
    }
  
    return false;
  };