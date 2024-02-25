// Given an array of length n, check is it's possible to select some elements
// from the array to sum up to T. You don't need to output the elemnts.
// n <= 100, T <= 10000, a[i] <= 10000

const knapsack = (arr, target) => {
    const memo = new Array(arr.length).fill(0)
        .map(() => new Array(target + 1).fill(-1));

    const helper = (i, cur) => {
        if (cur === 0) return true;
        if (cur < 0) return false;
        if (i === arr.length) return false;
        if (memo[i][cur] !== -1) return memo[i][cur];

        memo[i][cur] = helper(i + 1, cur - arr[i]) || helper(i + 1, cur);

        return memo[i][cur];
    }

    return helper(0, target);
}

console.time('DP');
console.log(knapsack([3, 5, 2, 7, 9], 10));
console.log(knapsack([2, 4, 6], 11));
console.log(knapsack([2, 7, 3, 4, 9, 5, 6, 1, 8], 25));
console.timeEnd('DP');