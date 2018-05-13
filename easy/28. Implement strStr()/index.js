/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const haystackArr = haystack.split('');
  const needleArr = needle.split('');

  if (!needleArr.length) {
    return 0;
  }

  for (let i = 0; i < haystackArr.length; ++i) {
    for (var j = 0; j < needleArr.length; ++j) {
      if (haystackArr[i + j] !== needleArr[j]) {
        break;
      }
    }

    if (j === needle.length) {
      return i;
    }
  }

  return -1;
};