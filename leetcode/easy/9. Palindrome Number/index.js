/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const reversed = parseInt(x.toString().split('').reverse().join(''));

  return x === reversed;
};