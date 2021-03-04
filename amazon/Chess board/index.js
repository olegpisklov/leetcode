const dirs = [[2,1], [1,2], [2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2]];

const main = (x, y, k) => {
    const visited = new Array(8).fill(0).map(i => new Array(8));

    return helper(x, y, k, visited) - 1;
}

const helper = (x, y, k, visited) => {
    if (x < 0 || x > 8 || y < 0 || y > 8 || k < 0 || visited[x][y]) {
        return 0;
    }

    let counter = 1;

    for (let i = 0; i < dirs.length; ++i) {
        counter += helper(x + dirs[i][0], y + dirs[i][1], k - 1, visited);
    }

    visited[x][y] = true;

    return counter;
}

// Time: O(k) ?
// Space: O(k)

console.log(main(0, 0, 1)); // 2
console.log(main(0, 0, 2)); // 12

