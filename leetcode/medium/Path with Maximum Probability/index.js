/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */

class Heap {
    constructor(callback) {
        this.values = [];
        this.callback = callback;
    }
    
    add(value) {
        this.values.push(value);
        this.values.sort(this.callback);
    }
    
    sort() {
        this.values.sort(this.callback);
    }
    
    removeTop() {
        return this.values.shift();
    }
    
    isEmpty() {
        return this.values.length === 0;
    }
}

// Dijkstra's algorithm: Time: O(n + Elogn), space: O(n + E), where E = edges.length.
var maxProbability = function(n, edges, succProb, start, end) {
    const distTo = new Array(n).fill(0);
    const graph = buildGraph(edges, succProb);
    
    distTo[start] = 1;
    
    if (graph[start] === undefined) {
        return 0;
    }
    
    const heap = new Heap((a, b) => b[1] - a[1]);
    
    heap.add([start, succProb[start]]);
    
    while (!heap.isEmpty()) {
        const [from] = heap.removeTop();
        
        if (from === end) {
            return distTo[end];
        }
        
        graph[from].forEach(([to, prob]) => {
            if (distTo[to] < distTo[from] * prob) {
                distTo[to] = distTo[from] * prob;
                heap.add([to, distTo[to]]);
            }
        });
    }
    
    return 0;
}




// Bellman Ford algorithm: Time: O(V * E), space: O(V + E), where E = edges.length. V - vertecies
var maxProbabilityBF = function(n, edges, succProb, start, end) { 
    const distTo = new Array(n).fill(0);
    const graph = buildGraph(edges, succProb);

    distTo[start] = 1;
    
    if (graph[start] === undefined) {
        return 0;
    }
    
    const q = [start];
    
    while (q.length) {
        const len = q.length;
        
        for (let i = 0; i < len; ++i) {
            const from = q.shift();
                        
            graph[from].forEach(([to, prob]) => {
                if (distTo[to] < distTo[from] * prob) {
                    distTo[to] = distTo[from] * prob;
                    q.push(to);
                }
            });
        }
    }
    
    return distTo[end];
};

const buildGraph = (edges, succProb) => {
    const graph = {};
    
    for (let i = 0; i < edges.length; ++i) {
        const [u, v] = edges[i];
        
        if (graph[u] === undefined) {
            graph[u] = [];
        }
        if (graph[v] === undefined) {
            graph[v] = [];
        }
        
        graph[u].push([v, succProb[i]]);
        graph[v].push([u, succProb[i]]);
    }
    
    return graph;
}