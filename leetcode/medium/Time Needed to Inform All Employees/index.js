/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const graph = buildGraph(headID, manager);
    const res = {maxPath: 0};

    dfs(graph, headID, informTime, informTime[headID], res);
    
    return res.maxPath;  
};

const buildGraph = (headID, manager) => {
    const graph = {};
    
    graph[headID] = [];
    
    for (let i = 0; i < manager.length; ++i) {
        const managerId = manager[i];
        
        if (graph[managerId] === undefined) {
            graph[managerId] = [i];
        } else {
            graph[managerId].push(i);
        }
    }
    
    return graph;
}

const dfs = (graph, id, informTime, timePath, res) => {
    if (graph[id] === undefined) {
        res.maxPath = Math.max(res.maxPath, timePath);
        return;
    }
    
    for (let i = 0; i < graph[id].length; ++i) {
        const childId = graph[id][i];
        
        dfs(graph, childId, informTime, timePath + informTime[childId], res);
    }
};
