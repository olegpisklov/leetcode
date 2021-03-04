const main = (n, edges) => {
    const graph = buildGraph(n, edges);

    const visited = new Set();
    let sum = 0;

    for (let key in graph) {
        const node = parseInt(key);

        if (visited.has(node)) continue;

        let q = [node];
        let connectedNodesCount = 0;

        while (q.length) {
            const cur = q.shift();

            if (visited.has(cur)) continue;

            ++connectedNodesCount;
            visited.add(cur);

            for (let i = 0; i < graph[cur].length; ++i) {
                q.push(graph[cur][i]);
            }
        }

        if (connectedNodesCount !== 0) {
            sum += Math.ceil(Math.sqrt(connectedNodesCount));
        }
    }

    return sum;
}

const buildGraph = (n, edges) => {
    const map = {};

    for (let i = 0; i < n; ++i) {
        map[i + 1] = [];
    }

    for (let i = 0; i < edges.length; ++i) {
        const [node1, node2] = edges[i];

        map[node1].push(node2);
        map[node2].push(node1);
    }

    return map;
}

console.log(main(10, [[1, 2], [1, 3], [2, 4], [3, 5], [7, 8]]))