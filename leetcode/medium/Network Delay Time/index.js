/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
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
    
    removeTop() {
        return this.values.shift();
    }
    
    isEmpty() {
        return this.values.length === 0;
    }
}

// Dijkstra's algorithm: Time: O(n + E*log(n)), space: O(n + E), where E = edges.length.
var networkDelayTime = function(times, n, k) {
    const graph = buildGraph(times, n);
    const timeTo = new Array(n + 1).fill(Infinity);
    const minHeap = new Heap((a, b) => a[1] - b[1]);
    
    timeTo[k] = 0;
    
    minHeap.add([k, 0]);

    while (!minHeap.isEmpty()) {
        const [from] = minHeap.removeTop();
        
        graph[from].forEach(([to, time]) => {
            if (timeTo[to] > timeTo[from] + time) {
                timeTo[to] = timeTo[from] + time;
                minHeap.add([to, timeTo[to]]);
            }
        });
    }

    let maxTime = 0;
    
    for (let i = 1; i <= n; ++i) {
        maxTime = Math.max(maxTime, timeTo[i]);
    }

    return maxTime === Infinity ? -1: maxTime;
}

// Bellman Ford algorithm: Time: O(V * E), space: O(V + E), where E = edges.length. V - vertecies
var networkDelayTimeBF = function(times, n, k) {
    const graph = buildGraph(times, n);
    const timeTo = new Array(n + 1).fill(Infinity);
    const q = [k];
    
    timeTo[k] = 0;

    while (q.length) {
        let len = q.length;
        
        for (let i = 0; i < len; ++i) {
            const from = q.shift();
            
            graph[from].forEach(([to, time]) => {
                if (timeTo[to] > timeTo[from] + time) {
                    timeTo[to] = timeTo[from] + time;
                    q.push(to);
                }
            });
        }
    }

    let maxTime = 0;
    
    for (let i = 1; i <= n; ++i) {
        maxTime = Math.max(maxTime, timeTo[i]);
    }

    return maxTime === Infinity ? -1: maxTime;
};

const buildGraph = (times, n) => {
    const graph = {};
    
    for (let i = 0; i < n; ++i) {
        graph[i + 1] = [];
    }
    
    for (let i = 0; i < times.length; ++i) {
        const [u, v, t] = times[i];
        
        graph[u].push([v, t]);
    }
    
    return graph;
}