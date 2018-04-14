/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  const n = s.length;
  let substr = [];
  let i = 0;
  let j = 0;

  while (i < n && j < n) {
    if (!substr.includes(s.charAt(j))) {
      substr.push(s.charAt(j++));
      max = Math.max(max, j - i);
    } else {
      substr.shift();
      ++i;
    }
  }

  return max;
};