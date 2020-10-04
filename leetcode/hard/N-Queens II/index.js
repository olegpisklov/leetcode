/**
 * @param {number} n
 * @return {number}
 */

let rows;
let cols;
let diagUp;
let diagDown;

var totalNQueens = function(n) {
    rows = {};
    cols = {};
    diagUp = {};
    diagDown = {};
    
    return backtrack(0, n, 0);
};

const backtrack = (row, n, counter) => {
    for (let col = 0; col < n; ++col) {
        if (canPlaceQueen(row, col)) {
            placeQueen(row, col);
            
            if (row + 1 === n) {
                ++counter;
            } else {
                counter = backtrack(row + 1, n, counter);
            }
            
            removeQueen(row, col);
        }
    }
    
    return counter;
}


const canPlaceQueen = (row, col) => {
    if (rows[row]) return false;
    
    if (cols[col]) return false;
    
    if (diagUp[row + col]) return false;
    
    if (diagDown[col - row]) return false;
    
    return true;
}
   

const placeQueen = (row, col) => {
    rows[row] = true;
    cols[col] = true;
    diagUp[row + col] = true;
    diagDown[col - row] = true;
}

const removeQueen = (row, col) => {
    delete rows[row];
    delete cols[col];
    delete diagUp[row + col];
    delete diagDown[col - row];
}