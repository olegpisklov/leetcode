const main = (list) => {
    const associatedMap = createAssociatedMap(list);

    const vertices = Object.keys(associatedMap);
    const groupsBySize = {};
    let maxGroupSize = 0;

    for (let i = 0; i < vertices.length; ++i) {
        const vertex = vertices[i];
        const group = [];

        dfs(associatedMap, vertex, new Set(), group);

        maxGroupSize = Math.max(group.length, maxGroupSize);

        if (groupsBySize[group.length] !== undefined) {
            groupsBySize[group.length].push(group);
        } else {
            groupsBySize[group.length] = [group];
        }
    }

    const maxGroups = groupsBySize[maxGroupSize];

    sortMaxGroups(maxGroups);

    return maxGroups[0];
}

// Time: E + V * log(V) - where E - number of edges, V - number of vertices
// Space: E + V

const sortMaxGroups = (groups) => {
    groups.sort((a, b) => {
        let result = 0;

        for (let i = 0; i < a.length && result === 0; ++i) {
            if (a[i] < b[i]) {
                result = -1;
            }
            if (a[0] > b[0]) {
                result = 1;
            }
        }
        
        return result;
    });
}

const dfs = (graph, current, visited, result) => {
    if (visited.has(current)) {
        return;
    }

    visited.add(current);
    result.push(current);

    const neighbours = graph[current];

    for (let i = 0; i < neighbours.length; ++i) {
        dfs(graph, neighbours[i], visited, result);
    }
}


const createAssociatedMap = (list) => {
    const associatedMap = {};

    for (let i = 0; i < list.length; ++i) {
        const [firstVertex, secondVertex] = list[i];

        if (associatedMap[firstVertex] !== undefined) {
            associatedMap[firstVertex].push(secondVertex);
        } else {
            associatedMap[firstVertex] = [secondVertex];
        }

        if (associatedMap[secondVertex] === undefined) {
            associatedMap[secondVertex] = [];
        }
    }

    return associatedMap;
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