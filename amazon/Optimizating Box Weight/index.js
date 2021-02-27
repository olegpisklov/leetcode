const main = (weights) => {
    const freqPairs = getFrequencyPairs(weights);
    const totalWeight = getTotalWeight(weights);
    const maxWeight = totalWeight / 2;
    const memo = new Array(freqPairs.length).fill(0).map(i => ({}));

    const {path: resultPairs} = helper(freqPairs, 0, maxWeight, [], memo);

    resultPairs.sort((a, b) => a[0] - b[0]);

    const result = [];

    for (let i = 0; i < resultPairs.length; ++i) {
        const [weight, frequency] = resultPairs[i];

        for (let j = 0; j < frequency; ++j) {
            result.push(weight);
        }
    }

    return result;
}

const getTotalWeight = (weights) => weights.reduce((acc, curWeight) => acc + curWeight, 0);

const getFrequencyPairs = (weights) => {
    const freqMap = {};

    for (let i = 0; i < weights.length; ++i) {
        if (freqMap[weights[i]] === undefined) {
            freqMap[weights[i]] = 0;
        }
        freqMap[weights[i]] += 1;
    }

    return Object.entries(freqMap).map(pair => [parseInt(pair[0]), pair[1]]);
}

const helper = (pairs, index, maxWeight, path, memo) => {
    if (maxWeight < 0) {
        return {
            count: path.reduce((acc, pair) => acc + pair[1], 0),
            weight: path.reduce((acc, pair) => acc + pair[0] * pair[1], 0),
            path: [...path]
        };
    }

    if (index === pairs.length) {
        return {
            count: Number.MAX_SAFE_INTEGER,
            weight: Number.MIN_SAFE_INTEGER,
            path: []
        }
    }

    if (memo[index][maxWeight] !== undefined) {
        return memo[index][maxWeight];
    }

    const weight = pairs[index][0] * pairs[index][1];

    const res1 = helper(pairs, index + 1, maxWeight - weight, [...path, pairs[index]], memo);
    const res2 = helper(pairs, index + 1, maxWeight, path, memo);
    let result;

    if (res1.count < res2.count) {
        result = res1;
    } else if (res1.count > res2.count) {
        result = res2;
    } else {
        result = res1.weight > res2.weight ? res1 : res2;
    }

    memo[index][maxWeight] = result;

    return result;
}

// Time: (N * W) ?sorting where N is arr length, W - max weight

console.time('label');
console.log(main([5, 3, 2, 4, 1, 2]));
console.log(main([1, 2, 5, 8, 4]));
console.log(main([15, 20, 20, 20, 50]));
console.log(main([1,2,3,4,5,6,7,2,345,4,32,3,23,45,6,57,6,768,678,6,4,5,456,4,56,32,52,234,2,3,23,4,34,54,67,578,34,53,45,3,5,67,5,67,3,4,34,67,3,463456,34,563,4,56,43,456,4,56,4,36,4,67865,7,5]));
console.timeEnd('label');
