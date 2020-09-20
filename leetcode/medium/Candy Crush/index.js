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