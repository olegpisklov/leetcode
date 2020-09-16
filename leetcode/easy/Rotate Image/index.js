/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    
    for (let i = 0; i < len/2; ++i) {
        for (let j = i; j < matrix.length - i - 1; ++j) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[len - 1 - j][i];
            matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
            matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
            matrix[j][len - 1 - i] = temp;
        }
    }
};