const main = (weights) => {
    const freqMap = {};

    for (let i = 0; i < weights.length; ++i) {
        if (freqMap[weights[i]] === undefined) {
            freqMap[weights[i]] = 0;
        }
        freqMap[weights[i]] += 1;
    }

    const pairs = [];

    for (let num in freqMap) {
        pairs.push([parseInt(num), freqMap[num]]);
    }

    const maxWeight = pairs.reduce((acc, cur) => acc + cur[0] * cur[1], 0) / 2;
    const memo = new Array(pairs.length).fill(0).map(i => ({}));
    const {values} = helper(pairs, 0, maxWeight, [], memo);

    values.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < values.length; ++i) {
        for (let j = 0; j < values[i][1]; ++j) {
            result.push(values[i][0]);
        }
    }

    return result;
}

const helper = (pairs, index, maxWeight, path, memo) => {
    if (maxWeight < 0) {
        return {
            count: path.reduce((acc, pair) => acc + pair[1], 0),
            weight: path.reduce((acc, pair) => acc + pair[0] * pair[1], 0),
            values: [...path]
        };
    }

    if (index === pairs.length) {
        return {
            count: Number.MAX_SAFE_INTEGER,
            weight: Number.MIN_SAFE_INTEGER,
            values: []
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

console.time('label');
console.log(main([5, 3, 2, 4, 1, 2]));
console.log(main([1, 2, 5, 8, 4]));
console.log(main([15, 20, 20, 20, 50]));
// console.log(main([1,2,3,4,5,6,7,2,345,4,32,3,23,45,6,57,6,768,678,6,4,5,456,4,56,32,52,234,2,3,23,4,34,54,67,578,34,53,45,3,5,67,5,67,3,4,34,67,3,463456,34,563,4,56,43,456,4,56,4,36,4,67865,7,5]));
console.timeEnd('label');
