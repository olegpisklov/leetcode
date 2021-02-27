const main = (str, ranges) => {
    const n = str.length;
    const leftPipeInd = new Array(n);
    const rightPipeInd = new Array(n);
    const prefixSum = new Array(n);

    let curInd = -1;

    for (let i = 0; i < n; ++i) {
        if (str.charAt(i) === '|') {
            curInd = i;
        }

        leftPipeInd[i] = curInd;
    }

    curInd = -1;

    for (let i = n - 1; i >= 0; --i) {
        if (str.charAt(i) === '|') {
            curInd = i;
        }

        rightPipeInd[i] = curInd;
    }

    let curSum = 0;

    for (let i = 0; i < n; ++i) {
        if (str.charAt(i) === '*') {
            curSum += 1;
        }

        prefixSum[i] = curSum;
    }

    const res = new Array(ranges.length);

    for (let i = 0; i < ranges.length; ++i) {
        const [left, right] = ranges[i];

        closestLeftPipe = rightPipeInd[left];
        closestRightPipe = leftPipeInd[right];

        res[i] = prefixSum[closestRightPipe] - prefixSum[closestLeftPipe];
    }

    return res;
}

// time O(m + n) m: length of s, n: size of startIndices

// https://github.com/Qiaowei2333/leetcode/blob/d437d4c7d3c4d9895b4fa7d236f9fd0c6a214f5a/algorithms/yama/11/08/ItemsInContainers.java

const mainBrute = (str, ranges) => {
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

// lb = [0,0,0,3,3,5,5]

// rb = [0,3,3,3,5,5,-1]

// ps = [0,1,2,2,3,3,4]

// leftBound = 0
// rightBound = 3