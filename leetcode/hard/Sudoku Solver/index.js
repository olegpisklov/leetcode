
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if (!board || !board.length) return;
    
    backtrack(board, 0, 0);
};

const backtrack = (board, row, col) => {
    for (let i = row; i < board.length; ++i, col = 0) { // note: we should reset col here
        for (let j = col; j < board[0].length; ++j) {
            if (board[i][j] !== '.') {
                continue;
            }
            
            for (let num = 1; num <= 9; ++num) {
                if (canPutNumber(board, i, j, num)) {
                    board[i][j] = num.toString();
                    
                    if (backtrack(board, i, j)) {
                        return true;
                    }

                    board[i][j] = '.';
                }
            }
            
            return false;
        }
    }
    
    return true;
}

const canPutNumber = (board, row, col, num) => {
    for (let i = 0; i < 9; ++i) {
        if (parseInt(board[row][i]) === num || parseInt(board[i][col]) === num) {
            return false;
        }
    }
    
    let iBox = Math.floor(row / 3);
    let jBox = Math.floor(col / 3);

    for (let i = iBox * 3; i < iBox * 3 + 3; ++i) { 
        for (let j = jBox * 3; j < jBox * 3 + 3; ++j) {
            if (parseInt(board[i][j]) === num) {
                return false;
            }
        }
    }
    
    return true;
}
