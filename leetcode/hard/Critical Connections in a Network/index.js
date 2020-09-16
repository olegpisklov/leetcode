/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    const graph = new Array(n);
    const visited = new Array(n);
    const lowestRank = new Array(n);
    
    for (let i = 0; i < graph.length; ++i) {
        graph[i] = [];
    }

    for (let i = 0; i < connections.length; ++i) {
        const connection = connections[i];
        graph[connection[0]].push(connection[1]);
        graph[connection[1]].push(connection[0]);
    }
    
    const currentNode = 0;
    const prevNode = -1;
    const currentRank = 0;
    const result = [];
    
    dfs(graph, visited, lowestRank, currentNode, prevNode, currentRank, result);
    
    return result;
}

const dfs = (graph, visited, lowestRank, currentNode, prevNode, currentRank, result) => {
    lowestRank[currentNode] = currentRank;
    visited[currentNode] = true;
    
    const nodes = graph[currentNode];
    
    for (let i = 0; i < nodes.length; ++i) {
        const nextNode = nodes[i];
        
        if (nextNode === prevNode) continue;
        
        if (!visited[nextNode]) {
            dfs(graph, visited, lowestRank, nextNode, currentNode, currentRank + 1, result);
        }
        
        lowestRank[currentNode] = Math.min(lowestRank[currentNode], lowestRank[nextNode]);
        
        if (lowestRank[nextNode] > currentRank) {
            result.push([currentNode, nextNode]);
        }
    }
}
