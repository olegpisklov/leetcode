/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses);
    const indegreesCount = new Array(numCourses);
    
    for (let i = 0; i < numCourses; ++i) {
        adjList[i] = [];
        indegreesCount[i] = 0;
    }
    
    for (let i = 0; i < prerequisites.length; ++i) {
        const [one, two] = prerequisites[i];
        adjList[two].push(one);
        indegreesCount[one] += 1;
    }
    
    const q = [];
    const path = [];

    for (let i = 0; i < indegreesCount.length; ++i) {
        if (indegreesCount[i] === 0) {
            q.push(i);
        }
    }

    while (q.length) {
        const node = q.shift();
        
        path.push(node);
        
        for (let i = 0; i < adjList[node].length; ++i) {
            const neighbour = adjList[node][i];
            
            indegreesCount[neighbour] -= 1;
            
            if (indegreesCount[neighbour] === 0) {
                q.push(neighbour);
            }
        }
    }

    return path.length === numCourses ? path : [];
};
