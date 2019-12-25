const find_string_anagrams = function (str, pattern) {
  const resultIndices = [];
  const patternMap = {};
  let windowStart = 0;
  let matched = 0;

  for (let i = 0; i < pattern.length; ++i) {
    if (!patternMap[pattern[i]]) {
      patternMap[pattern[i]] = 0;
    }

    patternMap[pattern[i]] += 1;
  }

  for (let i = 0; i < str.length; ++i) {
    if (str[windowStart] in patternMap) {
      patternMap[str[i]] -= 1;

      if (patternMap[str[i]] === 0) {
        matched += 1;
      }
    }

    // we have found an anagram
    if (matched === Object.keys(patternMap).length) {
      resultIndices.push(windowStart);
    }

    if (i >= pattern.length - 1) {
      const leftChar = str[windowStart];
      windowStart += 1;

      if (leftChar in patternMap) {
        // before putting the character back, decrement the matched count
        if (patternMap[leftChar] === 0) {
          matched -= 1;
        }
        
        patternMap[leftChar] += 1
      }
    }
  }

  return resultIndices;
};

console.log(find_string_anagrams('abbcabc', 'abc'));
