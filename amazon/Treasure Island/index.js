const main = (matrix) => {
    const q = [];
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const visited = {};

    q.push([0, 0]);
    visited['0#0'] = true;

    let steps = 0;

    while (q.length !== 0) {
        const len = q.length;
        ++steps;
        for (let i = 0; i < len; ++i) {
            const cur = q.shift();

            for (let j = 0; j < dirs.length; ++j) {
                const nextStepX = cur[0] + dirs[j][0];
                const nextStepY = cur[1] + dirs[j][1];

                if (nextStepX >= matrix.length || nextStepX < 0 || nextStepY >= matrix[0].length || nextStepY < 0 || matrix[nextStepX][nextStepY] === 'D' || visited[nextStepX + '#' + nextStepY] !== undefined) {
                    continue;
                }

                if (matrix[nextStepX][nextStepY] === 'X') {
                    return steps;
                }

                q.push([nextStepX, nextStepY]);

                visited[nextStepX + '#' + nextStepY] = true;
            }
        }
    }

    return -1;
}

console.log(main([
    ['O', 'O', 'O', 'O'],
    ['D', 'O', 'D', 'O'],
    ['O', 'O', 'O', 'O'],
    ['X', 'D', 'D', 'O']
]));