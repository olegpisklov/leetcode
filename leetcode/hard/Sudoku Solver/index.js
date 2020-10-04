
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if (!board || !board.length) return;
    
    backtrack(board);
};

const backtrack = (board) => {
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            if (board[i][j] !== '.') {
                continue;
            }
            
            for (let num = 1; num <= 9; ++num) {
                if (canPutNumber(board, i, j, num)) {
                    putNumber(board, i, j, num);
                    
                    if (backtrack(board)) {
                        return true;
                    } else {
                        removeNumber(board, i, j)
                    }
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

const putNumber = (board, row, col, num) => {
    board[row][col] = num.toString();
}

const removeNumber = (board, row, col) => {
    board[row][col] = '.';
}