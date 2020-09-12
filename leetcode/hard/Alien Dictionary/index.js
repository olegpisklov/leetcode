/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const graph = buildGraph(words);

    if (!graph) {
        return '';
    }

    const chars = Object.keys(graph);
    const visited = {};
    const res = {values: [], valid: true};

    for (let i = 0; i < chars.length; ++i) {
        dfs(graph, chars[i], res, visited);
        
        if (!res.valid) return '';
    }
    
    if (res.values.length < Object.keys(graph).length) {
        return '';
    }
    
    return res.values.join('');
};

const buildAdjLists = (words) => {
    const adjsLists = {};
    
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < words[i].length; ++j) {
            adjsLists[words[i][j]] = [];
        }
    }
    
    return adjsLists;
}

const dfs = (graph, current, res, visited) => {
    if (visited[current] !== undefined) {
        res.valid = visited[current]; // if false, cycle detected
        return;
    }
    
    visited[current] = false; // mark as gray
    
    for (let i = 0; i < graph[current].length; ++i) {
        dfs(graph, graph[current][i], res, visited);
        if (!res.valid) return;
    }
    
    visited[current] = true; // mark as black
    res.values.push(current);
}

const buildGraph = (words) => {
    const graph = buildAdjLists(words);;
    
    for (let i = 1; i < words.length; ++i) {
        const w1 = words[i - 1];
        const w2 = words[i];
        
        if (w1.length > w2.length && w1.startsWith(w2)) {
            return null;
        }
        
        for (let j = 0; j < Math.min(w1.length, w2.length); ++j) {
            if (w1[j] !== w2[j]) {
                graph[w2[j]].push(w1[j]); // put in reverse order, after dfs it will be in normal order
                break;
            }
        }
    }
    
    return graph;
}