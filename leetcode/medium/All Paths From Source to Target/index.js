/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const res = [];
    
    helper(graph, 0, res, []);
    
    return res;
};

const helper = (graph, i, res, path) => {
    path.push(i);

    if (i === graph.length - 1) {
        res.push([...path]);
        return;
    }
    
    for (let j = 0; j < graph[i].length; ++j) {
        helper(graph, graph[i][j], res, path);
        
        path.pop();
    }
}