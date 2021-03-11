/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// coins = [1,2,5], amount = 11

//      1    2    3    4    5    6    7    8    9    10   11  
// [0,  1,   1, inf, inf, inf, inf, inf, inf, inf, inf, inf]



// Unbounded Knapsack (we can take any coin multiple times), O(mn)
// for every amount we try to "remove" every coin (from the knapsack) and set min value
var coinChange = function(coins, amount) { 
    const dp = new Array(amount + 1).fill(Infinity);
    
    dp[0] = 0;

    for (let i = 1; i < dp.length; ++i) {
        for (let j = 0; j < coins.length; ++j) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
            }
        }    
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}






var coinChangeO = function(coins, amount) {
    const dp = new Array(amount+1);
    
    dp.fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; ++i) {
        for (let j = 0; j < coins.length; ++j) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i],  dp[i - coins[j]] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
};


var coinChangeRec = function(coins, amount) {
    return helper(coins, amount, {});
};

const helper = (coins, rem, count) => {
    if (rem < 0) {
        return -1;
    }
    
    if (rem === 0) {
        return 0;
    }
    
    if (count[rem]) {
        return count[rem];
    }
    
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < coins.length; ++i) {
        const res = helper(coins, rem - coins[i], count);
        
        if (res >= 0 && res < min) {
            min = res + 1;
        }
    }
    
    count[rem] = min === Number.MAX_SAFE_INTEGER ? -1 : min;
    
    return count[rem];
}