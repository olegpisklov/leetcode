const main = (maze) => {
    for (let i = 0; i < maze.length; ++i) {
        for (let j = 0; j < maze[0].length; ++j) {
            if (maze[i][j] !== '_') {
                continue;
            }

            const q = [[i, j]];
            const visited = new Set([i, j].toString());
            let steps = 0;

            while(q.length) {
                const len = q.length;
                let isGateFound = false;

                for (let l = 0; l < len; ++l) {
                    const [x, y] = q.shift();

                    if (visited.has([x, y].toString())) continue;

                    if (maze[x][y] === 'G') {
                        maze[i][j] = steps;
                        isGateFound = true;
                        break;
                    }

                    visited.add([x, y].toString());

                    for (let k = 0; k < 4; ++k) {
                        const [d1, d2] = DIRS[k];
                        const nextX = x + d1;
                        const nextY = y + d2;

                        if (nextX >= 0 && nextX < maze.length && 
                            nextY >= 0 && nextY < maze[0].length && 
                            maze[nextX][nextY] !== 'W') {
                            q.push([nextX, nextY]);
                        }
                    }
                }

                ++steps;
                
                if (isGateFound) {
                    break;
                }
            }
        }    
    }

    console.log(maze)
}

const DIRS = [[0, 1], [0, -1], [-1, 0], [1, 0]];

console.log(main([
    ['_', 'W', 'G', '_'],
    ['_', '_', '_', 'W'],
    ['_', 'W', '_', 'W'],
    ['G', 'W', '_', '_'],
]))