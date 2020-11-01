const is_scheduling_possible = function(tasks, prerequisites) {
    const adjList = new Array(tasks);
    const indegreesCount = new Array(tasks).fill(0);
  
    for (let i = 0; i < tasks; ++i) {
      adjList[i] = [];
    }

    for (let i = 0; i < prerequisites.length; ++i) {
      adjList[prerequisites[i][0]].push(prerequisites[i][1]);
      indegreesCount[prerequisites[i][1]] += 1;
    }
  
    const queue = [];
  
    for (let i = 0; i < indegreesCount.length; ++i) {
      if (indegreesCount[i] === 0) {
        queue.push(i);
      }
    }
  
    if (!queue.length) {
      return false;
    }
  
    while (queue.length) {
      const node = queue.pop();
  
      for (let i = 0; i < adjList[node].length; ++i) {
        const child = adjList[node][i];
  
        --indegreesCount[child];
  
        if (indegreesCount[child] === 0) {
          queue.push(child);
        }
      }
    }
  
    return indegreesCount.every(count => count === 0);
  };
  
  
  console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
  console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
  console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)
  //Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
  console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])}`)
  