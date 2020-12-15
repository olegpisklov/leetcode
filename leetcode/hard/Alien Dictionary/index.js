/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const graph = buildGraphNew(words);
    const q = [];
    const indegreesCount = getIndegreesCountMap(graph);

    for (let key in indegreesCount) {
        if (indegreesCount[key] === 0) {
            q.push(key);
        }
    }

    if (q.length === 0) {
        return '';
    }

    const result = [];

    while (q.length) {
        const char = q.shift();

        result.push(char);

        const children = graph[char];

        for (let i = 0; i < children.length; ++i) {
            --indegreesCount[children[i]];
            if (indegreesCount[children[i]] === 0) {
                q.push(children[i]);
            }
        }
    }

    if (result.length !== Object.keys(indegreesCount).length) {
        return '';
    }

    return result;
}

const getIndegreesCountMap = (graph) => {
    const indegreesCount = {};

    for (let key in graph) {
        const children = graph[key];

        if (indegreesCount[key] === undefined) {
            indegreesCount[key] = 0;
        }

        for (let i = 0; i < children.length; ++i) {
            if (indegreesCount[children[i]] !== undefined) {
                indegreesCount[children[i]] += 1;
            } else {
                indegreesCount[children[i]] = 1;
            }
        }
    }

    return indegreesCount;
}

const buildAdjLists = (words) => {
    const adjsLists = {};
    
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < words[i].length; ++j) {
            adjsLists[words[i][j]] = [];
        }
    }
    
    return adjsLists;
}

const buildGraphNew = (words) => {
    const graph = buildAdjLists(words);

    for (let i = 0; i < words.length - 1; ++i) {
        const word1 = words[i];
        const word2 = words[i + 1];

        if (word1.length > word2.length && word1.startsWith(word2)) {
            return null;
        }

        for (let j = 0; j < Math.min(word1.length, word2.length); ++j) {
            if (word1[j] !== word2[j]) {
                graph[word1[j]].push(word2[j]);
                break;
            };
        }
    }

    return graph;
}
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]

// t->f
// w->e
// r->t
// e->r

// w->e->r->t->f

// Output: "wertf"



console.log(alienOrder([
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt",
    // "rfe"
  ]));

  console.log(alienOrder([
    "z",
    "x"
  ]));

  console.log(alienOrder(  [
    "z",
    "x",
    "z"
  ]));

console.log(alienOrder(['ba', 'bc', 'ac', 'cab']));
console.log(alienOrder(['cab', 'aaa', 'aab']));
console.log(alienOrder(['ywx', "wz", 'xww', 'xz', 'zyy', 'zwz']));














/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrderOld = function(words) {
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