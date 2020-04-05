const trippleStep = (n) => {
    return findStepCount(n, {});
}

const findStepCount = (n, results) => {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        return 0;
    }

    if (results[n]) {
        return results[n];
    }

    results[n] = findStepCount(n - 1, results) + findStepCount(n - 2, results) + findStepCount(n - 3, results);

    return results[n];
}

// Time:
// - without memoization - O(3^N)
// - with memoization - O(N)

console.log(trippleStep(30));