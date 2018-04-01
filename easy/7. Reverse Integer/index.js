/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const multiplier = x > 0 ? 1 : -1;

  const result = multiplier * parseInt(x.toString().split('').reverse().join(''));

  if (result > 2147483647 || result < -2147483647){
    return 0;
  }

  return result;
};