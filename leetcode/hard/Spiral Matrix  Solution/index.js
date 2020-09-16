/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    let currentDirection = 'R';
    let row = 0;
    let col = 0;
    const rows = matrix.length;
    const columns = matrix[0].length;
    const res = new Array(rows * columns);
    let i = 0;
    
    while (i !== res.length) {
        res[i] = matrix[row][col];
        
        matrix[row][col] = 'x';

        if (currentDirection === 'R' && (col === columns - 1 || matrix[row][col + 1] === 'x')) {
            currentDirection = 'D';
        } else if (currentDirection === 'D' && (row === rows - 1 || matrix[row + 1][col] === 'x')) {
            currentDirection = 'L';
        } else if (currentDirection === 'L' && (col === 0 || matrix[row][col - 1] === 'x')) {
            currentDirection = 'U';
        } else if (currentDirection === 'U' && matrix[row - 1][col] === 'x') {
           currentDirection = 'R';
        }
        
        if (currentDirection === 'R' && col < columns - 1) {
            ++col;
        } else if (currentDirection === 'D' && row < rows - 1) {
            ++row;
        } else if (currentDirection === 'L' && col > 0) {
            --col;
        } else if (currentDirection === 'U' && row > 0){
            --row;
        }
        
        ++i;
    }
    
    return res;
};