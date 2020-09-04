// directed graph
const main = (list) => {
    const degrees = {};
    const indegreesCount = {};

    for (let i = 0; i < list.length; ++i) {
        const [firstVertex, secondVertex] = list[i];

        if (degrees[firstVertex] !== undefined) {
            degrees[firstVertex].push(secondVertex);
        } else {
            degrees[firstVertex] = [secondVertex];
        }

        if (indegreesCount[secondVertex] !== undefined) {
            indegreesCount[secondVertex] += 1;
        } else {
            indegreesCount[secondVertex] = 1;
        }

        if (indegreesCount[firstVertex] === undefined) {
            indegreesCount[firstVertex] = 0;
        } 
    }

    const zeroIndegrees = [];
    const indegrees = Object.keys(indegreesCount);

    for (let i = 0; i < indegrees.length; ++i) {
        const vertex = indegrees[i];

        if (indegreesCount[vertex] === 0) {
            zeroIndegrees.push(vertex);
        }
    }

    if (zeroIndegrees.length === 0) {
        return [];
    }

    const maxGroups = [];

    for (let i = 0; i < zeroIndegrees.length; ++i) {
        const group = {
            values: [],
            valid: true
        }

        dfs2(degrees, zeroIndegrees[i], group, {});

        if (group.valid) {
            if (maxGroups.length === 0) {
                maxGroups.push(group.values);
                continue;
            }
    
            if (group.length > maxGroups[0].length) {
                maxGroups = [group.values];
            } else if (group.length === maxGroups[0].length) {
                maxGroups.push(group.values);
            }
        }
    }

    sortMaxGroups(maxGroups);

    return maxGroups[0];
}

// Time: O(V + E + S * V * log(V)), where V - number of verticies, E - number of edges, S - longest string as item name

const dfs2 = (graph, current, group, visited) => {
    if (visited[current] !== undefined) {
        group.valid = false;
        return;
    }

    group.values.push(current);

    if (graph[current] === undefined) {
        return;
    }

    for (let i = 0; i < graph[current].length; ++i) {
        dfs2(graph, graph[current][i], group, visited);
    }
}


// undirected graph
const main2 = (list) => {
    const associatedMap = createAssociatedMap(list);

    let maxGroups = [];
    const visited = new Set();
    const items = Object.keys(associatedMap);

    for (let i = 0; i < items.length; ++i) {
        const item = items[i];
        const group = [];

        dfs(associatedMap, item, visited, group);

        if (maxGroups.length === 0) {
            maxGroups.push(group);
            continue;
        }

        if (group.length > maxGroups[0].length) {
            maxGroups = [group];
        } else if (group.length === maxGroups[0].length) {
            maxGroups.push(group);
        }
    }

    sortMaxGroups(maxGroups);

    return maxGroups[0];
}

const sortMaxGroups = (groups) => {
    for (let i = 0; i < groups.length; ++i) {
        groups[i].sort((a, b) => {
            if (a < b) { // string comparison
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
    }

    groups.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
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

        if (associatedMap[secondVertex] !== undefined) {
            associatedMap[secondVertex].push(firstVertex);
        } else {
            associatedMap[secondVertex] = [firstVertex];
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