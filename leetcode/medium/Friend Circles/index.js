/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const visited = new Array(M.length);
    let counter = 0;
    
    for (let i = 0; i < M.length; ++i) {
        if (!visited[i]) {
            ++counter;
            dfs(M, i, visited)
        }
    }
    
    return counter;

};

const dfs = (M, i, visited) => {
    for (let j = 0; j < M[i].length; ++j) {
        if (M[i][j] === 1 && !visited[j]) {
            visited[j] = 1;
            dfs(M, j, visited);
        }
    }
}