/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            if (board[i][j] !== word[0]) {
                continue;
            }
            
            if (helper(board, word, i, j, 0)) {
                return true;
            }
        }    
    }
        
    return false;
};

const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const helper = (board, word, row, col, ind) => {
    if (row >= board.length ||
        row < 0 ||
        col >= board[0].length ||
        col < 0 ||
        board[row][col] !== word[ind]) {
        
        return false;
    }
    
    if (ind === word.length - 1) {
        return true;
    }
    
    // mark as visited
    board[row][col] = '#';
    
    for (let i = 0; i < 4; ++i) {
        const [r, c] = dirs[i];
        
        if (helper(board, word, row + r, col + c, ind + 1)) {
            return true;
        }
    }
    
    // restore the letter (backtrack)
    board[row][col] = word[ind];

    return false;
}