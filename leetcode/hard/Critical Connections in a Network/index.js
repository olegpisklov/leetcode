/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */



var criticalConnections = function(n, connections) {
    const graph = {};
    
    connections.forEach(([prev, next]) => {
        graph[prev] = graph[prev] || [];
        graph[next] = graph[next] || [];
        graph[prev].push(next);
        graph[next].push(prev)
    });
    
    const depthRank = {};
    
    const dfs = (nodeId, depth, parentId) => {
        if (depthRank[nodeId] !== undefined) {
            return depthRank[nodeId];
        }
        
        depthRank[nodeId] = depth;
        
        const neighbours = graph[nodeId];
        let min = depth;
        
        neighbours.forEach(nextId => {            
            // not the node we just visited
            if (parentId === nextId) return;
            
            const cachedNextDepth = depthRank[nextId];

            if (cachedNextDepth !== undefined) {
                min = Math.min(min, cachedNextDepth);
                depthRank[nextId] = min;
            } else {
                const nextDepth = dfs(nextId, depth + 1, nodeId);
                min = Math.min(min, nextDepth); 
            }
        });
        
        depthRank[nodeId] = min;
        
        return min;
    }
    
    dfs(connections[0][0], 0, null);

    return connections.filter(([prev, next]) => depthRank[prev] !== depthRank[next]);
};


var criticalConnectionOld = function(n, connections) {
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
