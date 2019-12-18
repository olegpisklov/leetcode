const lengthOfLongestSubstring = (str, k) => {
  let maxLength = 0;
  let windowStart = 0;
  let maxFrequency = 0;
  const frequencyMap = {};

  for (let i = 0; i < str.length; ++i) {
    if (!frequencyMap[str[i]]) {
      frequencyMap[str[i]] = 0;
    }

    frequencyMap[str[i]] += 1;
    maxFrequency = Math.max(maxFrequency, frequencyMap[str[i]]);

    if (i - windowStart + 1 - maxFrequency > k) {
      frequencyMap[str[windowStart]] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, i - windowStart);    
  }

  return maxLength;
}