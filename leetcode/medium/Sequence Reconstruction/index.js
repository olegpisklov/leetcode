const main = (original, sequances) => {
    const graph = {};
    const indegreesCount = {};

    for (let i = 0; i < sequances.length; ++i) {
        const sequance = sequances[i];

        for (let j = 0; j < sequance.length - 1; ++j) {
            if (graph[sequance[j]] === undefined) {
                graph[sequance[j]] = [sequance[j + 1]];
            } else {
                graph[sequance[j]].push(sequance[j + 1]);
            }

            if (graph[sequance[j + 1]] === undefined) {
                graph[sequance[j + 1]] = [];
            }

            if (indegreesCount[sequance[j + 1]] === undefined) {
                indegreesCount[sequance[j + 1]] = 1;
            } else {
                indegreesCount[sequance[j + 1]] += 1;
            }

            if (indegreesCount[sequance[j]] === undefined) {
                indegreesCount[sequance[j]] = 0;
            }
        }
    }

    const q = [];

    for (let node in indegreesCount) {
        if (indegreesCount[node] === 0) {
            q.push(node);
        }
    }

    if (q.length > 1 || q.length === 0) {
        return false;
    }

    const ordered = [];

    while (q.length) {
        if (q.length > 1) {
            return false;
        }

        const node = q.shift();

        ordered.push(parseInt(node));

        for (let i = 0; i < graph[node].length; ++i) {
            const child = graph[node][i];

            --indegreesCount[child];

            if (indegreesCount[child] === 0) {
                q.push(child);
            }
        }
    }

    for (let i = 0; i < original.length; ++i) {
        if (original[i] !== ordered[i]) {
            return false;
        }
    }

    return true;
}


console.log(main([1,2,3], [[1,2],[1,3]]));
console.log(main([1,2,3], [[1,2]])); 
console.log(main([1,2,3], [[1,2],[1,3],[2,3]]));
console.log(main([4,1,5,2,6,3], [[5,2,6,3],[4,1,5,2]])); 