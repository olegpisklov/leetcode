const pos = 40

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 2) + fib(n - 1);
}

console.time('fib')
console.log(fib(pos));
console.timeEnd('fib')

const dp = new Array(pos + 1).fill(-1);

function fibDP(n) {
    if (n < 2) {
        return n;
    }
    if (dp[n] !== -1) {
        return dp[n];
    }

    dp[n] = fibDP(n - 2) + fibDP(n - 1); 

    return dp[n];
}

console.time('fibDP')
console.log(fibDP(pos));
console.timeEnd('fibDP')
