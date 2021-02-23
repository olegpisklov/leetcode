const main = (n, hardDisksSpace, windowSize) => {
    let result = 0;
    let q = [];

    for (let i = 0; i < hardDisksSpace.length; ++i) {
        const currentSpace = hardDisksSpace[i];

        while (q.length !== 0 && currentSpace < hardDisksSpace[q[q.length - 1]]) {
            q.pop();
        }
        if (q.length !== 0 && q[0] <= (i - windowSize)) {
            q.shift();
        }

        q.push(i);

        if (i >= (windowSize - 1)) {
            result = Math.max(result, hardDisksSpace[q[0]]);
        }
    }

    return result;
}


// Time: O(n), Space: O(k)

console.log(main(3, [8,2,4], 2));
console.log(main(3, [8,2,4,5], 2));
console.log(main(6, [8,2,4,3,7,6], 2));
console.log(main(6, [8,2,4,3,7,6], 3));
console.log(main(7, [2,4,3,7,8,6,5], 4)); 2, 3, 3, 5

