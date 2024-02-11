let solveKnapsackBU = function(profits, weights, capacity) { // Bottom Up: O(n*m)
    const n = profits.length;
    // with '0' capacity we have '0' profit
    const dp = new Array(n).fill(0).map(i => new Array(capacity + 1).fill(0));

    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) {
            dp[0][c] = profits[0];
        }
    }

    for (let i = 1; i < n; ++i) {
        const currentWeight = weights[i];
        const currentProfit = profits[i];

        for (let c = 1; c <= capacity; ++c) {
            const profit1 = dp[i - 1][c]; // profit without taking current weight
            let profit2 = 0;
    
            if (currentWeight <= c) { // take cur weight
                profit2 = Math.max(profit1, dp[i - 1][c - currentWeight] + currentProfit);
            }
    
            dp[i][c] = Math.max(profit1, profit2);
        }
    }
  
    return dp[n - 1][capacity];
};
  
let solveKnapsack = function(profits, weights, capacity) { // Top Down with memo: O(n*m)
    const memo = new Array(profits.length).fill(0).map(i => new Array(capacity + 1).fill(null));

    return helper(profits, weights, capacity, 0, memo);
};
  
const helper = (profits, weights, capacity, i, memo) => {
    if (i === profits.length || capacity === 0) {
        return 0;
    }

    if (memo[i][capacity] !== null) {
        return memo[i][capacity];
    }

    const profit1 = helper(profits, weights, capacity, i + 1, memo); // without cur weight
    let profit2 = 0;

    if (capacity >= weights[i]) {
        profit2 = helper(profits, weights, capacity - weights[i], i + 1, memo) + profits[i]; // with cur weight
    }

    memo[i][capacity] = Math.max(profit1, profit2);

    return memo[i][capacity];
}


var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsackBU(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);