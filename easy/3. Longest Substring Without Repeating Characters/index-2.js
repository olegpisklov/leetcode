/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  const n = s.length;
  const charIndexes = {};
  let i = 0;

  for (let j = 0; j < n; ++j) {
    const index = charIndexes[s.charAt(j)] || 0;

    i = Math.max(i, index);
    max = Math.max(max, j - i + 1);
    charIndexes[s.charAt(j)] = j + 1;
  }

  return max;
};