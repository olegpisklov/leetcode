


var numIslands = function(grid) {
    let counter = 0;
    
    for (let row = 0; row < grid.length; ++row) {
        for (let col = 0; col < grid[0].length; ++col) {
            if (grid[row][col] === '0') continue;
            
            ++counter;
            
            dfs(row, col, grid);
        }    
    }
        
    return counter;
}

const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const dfs = (row, col, grid) => {
    if (row < 0 || row === grid.length ||
       col < 0 || col === grid[0].length ||
       grid[row][col] === '0') {
        
        return;
    }
    
    grid[row][col] = '0';
    
    for (let i = 0; i < dirs.length; ++i) {
        dfs(row + dirs[i][0], col + dirs[i][1], grid);
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsQ = function(grid) {
    if (!grid || ! grid.length) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    const q = [];
    let islands = 0;
    
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (grid[i][j] === '0') {
                continue;
            }
            
            ++islands;
            q.push({i, j});
            grid[i][j] = '0';

            while(q.length) {
                const cur = q.shift();
                
                if (cur.i + 1 < rows && grid[cur.i + 1][cur.j] === '1') {
                    q.push({i: cur.i + 1, j: cur.j});
                    grid[cur.i + 1][cur.j] = '0';
                }
                if (cur.j + 1 < cols && grid[cur.i][cur.j + 1] === '1') {
                    q.push({i: cur.i, j: cur.j + 1});
                    grid[cur.i][cur.j + 1] = '0';
                }
                if (cur.i > 0 && grid[cur.i - 1][cur.j] === '1') {
                    q.push({i: cur.i - 1, j: cur.j});
                    grid[cur.i - 1][cur.j] = '0';
                }
                if (cur.j > 0 && grid[cur.i][cur.j - 1] === '1') {
                    q.push({i: cur.i, j: cur.j - 1});
                    grid[cur.i][cur.j - 1] = '0';
                }
            }
        }    
    }

    return islands;
};