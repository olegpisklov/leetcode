
const main = (n, m, h, v) => { // with sort
    h.sort((a, b) => a - b);
    v.sort((a, b) => a - b);

    const maxHorizontalSeq = getMaxSequenceCount(h);
    const maxVerticalSeq = getMaxSequenceCount(v);

    return (maxHorizontalSeq + 1) * (maxVerticalSeq + 1);
}

const getMaxSequenceCount = (arr) => {
    let maxSeq = 0;
    let curSeq = 0;
    let prev = 0;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] - prev === 1) {
            ++curSeq;
        } else {
            curSeq = 1;
        }

        maxSeq = Math.max(maxSeq, curSeq);
        prev = arr[i];
    }

    return maxSeq;
}

console.log(main(6, 6, [4], [2]));
console.log(main(3, 3, [2], [2]));
console.log(main(3, 2, [1, 2, 3], [1, 2]));