/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const arr = s.split('');

  return arr.reduce((result, romanNumber, index) => {
    if (roman[arr[index + 1]] > roman[romanNumber]) {
      result -= roman[romanNumber];
    } else {
      result += roman[romanNumber];
    }

    return result;
  }, 0);
};