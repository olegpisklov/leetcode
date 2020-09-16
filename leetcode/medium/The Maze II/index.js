/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
    const dists = new Array(maze.length);
    
    for (let i = 0; i < dists.length; ++i) {
        const arr = new Array(maze[0].length);
        arr.fill(Number.MAX_SAFE_INTEGER);
        dists[i] = arr;
    }
    
    dists[start[0]][start[1]] = 0;
    
    helper(start[0], start[1], maze, dists);
    
    const result = dists[destination[0]][destination[1]];

    return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};

const helper = (row, col, maze, dists) => {
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    for (let i = 0; i < dirs.length; ++i) {
        const dir = dirs[i];
        
        let x = row + dir[0];
        let y = col + dir[1];
        let c = 0;

        while (x >= 0 && y >= 0 && x < maze.length && y < maze[0].length && maze[x][y] !== 1) {
            x += dir[0];
            y += dir[1];
            ++c;
        }
        
        x -= dir[0];
        y -= dir[1];
    
        if (dists[row][col] + c < dists[x][y]) {
            dists[x][y] = dists[row][col] + c;
            helper(x, y, maze, dists);
        }
    }
}
