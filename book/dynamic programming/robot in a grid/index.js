const findPath = (maze) => {
    if (!maze || !maze.length) {
        return false;
    }

    const path = [];
    const failedPoints = new Set();

    findMazePath(0, 0, maze, path, failedPoints);

    return path;
}

const findMazePath = (row, col, maze, path, failedPoints) => {
    if (row >= maze[0].length || 
        col >= maze[0].length || 
        !maze[row][col] ||
        failedPoints.has([row, col].toString())) {

        return false;
    }

    const isEnd = (row === maze[0].length - 1) && (col === maze[0].length - 1);

    if (isEnd || 
        findMazePath(row + 1, col, maze, path, failedPoints) || 
        findMazePath(row, col + 1, maze, path, failedPoints)) {

        path.push([row, col]);

        return true;
    }

    failedPoints.add([row, col].toString());

    return false;
}

// Time:
// - without memoization - O(2^(rows + cols))
// - with memoization - O(rows * cols)

console.log(findPath([
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1]
]))