/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];

var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;

    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
    
    if (n === 1) return 1;
    
    const q = [[0, 0]];
    
    let res = 1;
    const visited = new Array(n).fill(0).map(() => new Array(n));
    
    visited[0][0]= true;
    
    while (q.length) {
        const len = q.length;

        for (let i = 0; i < len; ++i) {
            let [row, col] = q.shift();
            
            if (row === n - 1 && col === n - 1) {
                return res;
            }
            
            for (let j = 0; j < dirs.length; ++j) {
                const [r, c] = dirs[j];
                
                const nextRow = row + r;
                const nextCol = col + c;
                
                if (nextRow >= 0 && nextRow < n &&
                    nextCol >= 0 && nextCol < n &&
                    grid[nextRow][nextCol] === 0 && 
                    !visited[nextRow][nextCol]) {

                    q.push([nextRow, nextCol]);
                    visited[nextRow][nextCol] = true;
                }
            }
        }
        
        ++res;
    }
    
    return -1;
}
