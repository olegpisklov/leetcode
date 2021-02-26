const main = (str, ranges) => {
    let res = new Array(ranges.length);

    for (let i = 0; i < ranges.length; ++i) {
        const [start, end] = ranges[i];
        let isPipeOpened = false;
        let curCounter = 0;
        let resultCounter = 0;

        for (let j = start; j <= end && j < str.length; ++j) {
            if (str[j] === '|' && !isPipeOpened) {
                isPipeOpened = true;
            } else if (str[j] === '|' && isPipeOpened) {
                resultCounter += curCounter;
                curCounter = 0;
            } else if (str[j] === '*' && isPipeOpened) {
                curCounter += 1;
            }
        }

        res[i] = resultCounter;
    }

    return res;
}

console.log(main('|**|*|*', [[0, 4], [1, 6]]));
console.log(main('*|*|', [[1, 3]]));
