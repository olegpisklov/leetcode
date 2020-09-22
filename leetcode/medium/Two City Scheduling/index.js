/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {    
    costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
    
    let minCost = 0;
    let aCounter = 0;
    let bCounter = 0
    
    for (let i = 0; i < costs.length; ++i) {
        if (aCounter === costs.length / 2) {
            minCost += costs[i][1];
        } else if (bCounter === costs.length / 2) {
            minCost += costs[i][0];
        } else if (costs[i][0] > costs[i][1]) {
            minCost += costs[i][1];
            ++bCounter;
        } else {
            minCost += costs[i][0];
            ++aCounter;
        }
    }
    
    return minCost;
};