/**
 * Array, where index is a node index,
 * value is an Array, where index is a path index, value is a neighbour index with mininmum cost
 */
let possiblePaths;
let visited;

const main = (n, roads, names, targetPath) => {
    const m = names.length;
    const k = targetPath.length;

    possiblePaths = new Array(m).fill(0).map(() => new Array(k).fill(0));
    visited = new Array(m).fill(0).map(() => new Array(k).fill(Number.MAX_SAFE_INTEGER));

    const graph = new Array(n).fill(0).map(() => new Array());

    for (let i = 0; i < roads.length; ++i) {
        const [v1, v2] = roads[i];

        graph[v1].push(v2);
        graph[v2].push(v1);
    }

    let minCost = Number.MAX_SAFE_INTEGER;
    let start = 0;

    for (let i = 0; i < m; ++i) {
        const cost = dfs(graph, i, 0, names, targetPath);

        if (cost < minCost) {
            start = i;
            minCost = cost;
        }
    }

    const res = [];

    while (res.length < k) {
        res.push(start);
        start = possiblePaths[start][res.length - 1];
    }

    return res;
}

const dfs = (graph, nodeInd, pathInd, names, targetPath) => {
    const curCost = names[nodeInd] === targetPath[pathInd] ? 0 : 1;

    if (pathInd === targetPath.length - 1) { 
        return curCost;
    }

    if (visited[nodeInd][pathInd] !== Number.MAX_SAFE_INTEGER) {
        return visited[nodeInd][pathInd];
    }

    let minCost = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < graph[nodeInd].length; ++i) {
        const child = graph[nodeInd][i];
        const cost = dfs(graph, child, pathInd + 1, names, targetPath);

        if (minCost > cost) {
            minCost = cost;
            possiblePaths[nodeInd][pathInd] = child;
        }
    }

    visited[nodeInd][pathInd] = curCost + minCost;

    return visited[nodeInd][pathInd];
}



let n = 5;
let roads = [[0,2],[0,3],[1,2],[1,3],[1,4],[2,4]];
let names = ["ATL","PEK","LAX","DXB","HND"];
let targetPath = ["ATL","DXB","HND","LAX"];

console.log(main(n, roads, names, targetPath));

n = 4;
roads = [[1,0],[2,0],[3,0],[2,1],[3,1],[3,2]];
names = ["ATL","PEK","LAX","DXB"];
targetPath = ["ABC","DEF","GHI","JKL","MNO","PQR","STU","VWX"];

// console.log(main(n, roads, names, targetPath));

n = 6;
roads = [[0,1],[1,2],[2,3],[3,4],[4,5]];
names = ["ATL","PEK","LAX","ATL","DXB","HND"];
targetPath = ["ATL","DXB","HND","DXB","ATL","LAX","PEK"];

// console.log(main(n, roads, names, targetPath));
