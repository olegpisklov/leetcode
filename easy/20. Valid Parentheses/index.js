/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const br = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const arr = s.split('');

  if (arr.length % 2 !== 0) {
    return false;
  }

  const closeStack = [];

  const result = arr.every(char => {
    if (br[char]) {
      closeStack.push(br[char]);
      return true;
    }
    return char === closeStack.pop();
  });

  return result && !closeStack.length;
};
