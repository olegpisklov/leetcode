/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    const rows = board.length;
    const cols = board[0].length;    
    let stable = true;
    
    // find equal adjacent row values, make them "-" sign
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols - 2; ++col) {
            const val = Math.abs(board[row][col]);
            if (val !== 0 && 
                val === Math.abs(board[row][col + 1]) && 
                val === Math.abs(board[row][col + 2])) {
                
                board[row][col] = -val;
                board[row][col + 1] = -val;
                board[row][col + 2] = -val;
                stable = false;
            }
        }
    }
    
    // find equal adjacent column values, make them "-" sign
    for (let col = 0; col < cols; ++col) {
        for (let row = 0; row < rows - 2; ++row) {
            const val = Math.abs(board[row][col]);
            if (val !== 0 && 
                val === Math.abs(board[row + 1][col]) && 
                val === Math.abs(board[row + 2][col])) {
                
                board[row][col] = -val;
                board[row + 1][col] = -val;
                board[row + 2][col] = -val;
                stable = false;
            }
        }
    }

    if (stable) {
        return board;
    }

    // crash all values with "-" sign
    for (let col = 0; col < cols; ++col) {
        let rowSlowIndex = rows - 1;
        
        for (let row = rows - 1; row >= 0; --row) {
            if (board[row][col] > 0) {
                board[rowSlowIndex--][col] = board[row][col];
            }
        }
        
        while (rowSlowIndex >= 0) {
            board[rowSlowIndex--][col] = 0;
        }
    }
    
    return candyCrush(board);
};

console.log(candyCrush([
    [110,5,  112,113,114],
    [210,211,5,  213,214],
    [310,311,3,  313,314],
    [410,411,412,5,  414],
    [5,  1,  512,3,  3],
    [610,4,  1,  613,614],
    [710,1,  2,  713,714],
    [810,1,  2,  1,  1],
    [1,  1,  2,  2,  2],
    [4,  1,  4,  4,  1014]])
);