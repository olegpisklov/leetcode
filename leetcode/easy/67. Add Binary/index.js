/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let n1 = a.length - 1;
  let n2 = b.length - 1;
  let carry = 0;
  const result = [];

  while (n1 >= 0 || n2 >= 0) {
    const char1 = a.charAt(n1) && parseInt(a.charAt(n1)) || 0;
    const char2 = b.charAt(n2) && parseInt(b.charAt(n2)) || 0;
    const char = char1 + char2 + carry;

    if (char === 2) {
      carry = 1;
      result.unshift(0);
    } else if (char === 3) {
      carry = 1;
      result.unshift(1);
    } else if (char === 0) {
      carry = 0;
      result.unshift(0);
    } else {
      carry = 0;
      result.unshift(1);
    }

    --n1;
    --n2;
  }

  if (carry > 0) {
    result.unshift(1);
  }

  return result.join('');
};