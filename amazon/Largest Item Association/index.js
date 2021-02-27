const main = (list) => {
    const graph = buildGraph(list);

    const visited = new Set();
    const groups = [];

    for (let vertex in graph) {
        const group = [];

        dfs(graph, vertex, visited, group);

        group.sort(sortGroupComparator);
        groups.push(group);
    }

    groups.sort(sortMaxGroupsComparator);

    return groups[0];
}

const sortGroupComparator = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

// Time: E + V * log(V) - where E - number of edges, V - number of vertices
// Space: E + V

// https://github.com/Qiaowei2333/leetcode/blob/d437d4c7d3c4d9895b4fa7d236f9fd0c6a214f5a/algorithms/yama/11/08/LargestItemAssociation.java
// time O(v*e*loge + k * log k) e: edges, v: vertex, k: # of connected components
// space o(v + e)
const sortMaxGroupsComparator = (a, b) => {
    if (a.length !== b.length) {
        return b.length - a.length;
    }

    for (let i = 0; i < a.length; ++i) {
        if (a[i] === b[i]) continue;

        if (a[i] < b[i]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
    }
}

const dfs = (graph, current, visited, result) => {
    if (visited.has(current)) {
        return;
    }

    visited.add(current);
    result.push(current);

    graph[current].forEach(neighbour => {
        dfs(graph, neighbour, visited, result);
    });
}


const buildGraph = (list) => {
    const graph = {};

    for (let i = 0; i < list.length; ++i) {
        const [firstVertex, secondVertex] = list[i];

        if (graph[firstVertex] === undefined) {
            graph[firstVertex] = [];
        }
        if (graph[secondVertex] === undefined) {
            graph[secondVertex] = [];
        }

        graph[firstVertex].push(secondVertex);
        // graph[secondVertex].push(firstVertex);
    }

    return graph;
}

console.log(main([
    ['item1', 'item2'],
    ['item1', 'item4'],
    ['item3', 'item4'],
    ['item4', 'item5']
]))

console.log(main([
    ['item1', 'item2'],
    ['item3', 'item4'],
    ['item4', 'item5']
]))

console.log(main([
    ['item1', 'item2'],
    ['item2', 'item3'],
    ['item4', 'item5'],
    ['item6', 'item7'],
    ['item5', 'item6'],
    ['item3', 'item7']
]))
console.log(main([
                ["Item1", "Item2"],
                ["Item2", "Item8"],
                ["Item2", "Item10"],
                ["Item10", "Item12"],
                ["Item10", "Item4"],
                ["Item10", "Item3"],
                ["Item3", "Item4"],
                ["Item4", "Item5"]
            ]))
