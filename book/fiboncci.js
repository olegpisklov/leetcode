function fib(n) {
    let fibArr = [];

    for (let i = 0; i < n + 1; ++i) {
        if (i === 1 || i === 0) {
            fibArr.push(i);
            continue;
        }

        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }

    return fibArr.pop();
}
