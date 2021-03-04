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

const main = (n) => {
    const matrix = new Array(n).fill(0).map(i => new Array(n));
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let curDir = 0;
    let i = 0;
    let j = 0;
    
    for (let k = 0; k < n**2; ++k) {
        matrix[i][j] = k + 1;

        i += dirs[curDir][0];
        j += dirs[curDir][1];

        if (!isValid(i, j, matrix)) {
            i -= dirs[curDir][0];
            j -= dirs[curDir][1];

            curDir = (curDir + 1) % 4;

            i += dirs[curDir][0];
            j += dirs[curDir][1];
        }
    }

    return matrix;
}

const isValid = (i, j, matrix) => {
    return i >= 0 && i < matrix.length && 
        j >= 0 && j < matrix.length &&
        matrix[i][j] === undefined;
}

console.log(main(3));