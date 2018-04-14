/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  const n = digits.length;

  ++digits[n - 1];

  for (let i = n - 1; i >= 0; --i) {
    digits[i] += carry;

    if (digits[i] >= 10) {
      digits[i] = digits[i] % 10;
      carry = 1;
    } else {
      carry = 0;
    }
  }

  if (carry > 0) {
    digits.unshift(1);
  }

  return digits;
};