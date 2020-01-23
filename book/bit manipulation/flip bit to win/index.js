const BYTES = 32;

const getLongestSequence = (num) => {
    const sequences = getAlternatingSequences(num);

    return findLongestSequence(sequences);
}

const findLongestSequence = (sequences) => {
    let maxLength = 1;

    for (let i = 0; i < sequences.length; i += 2) {
        const prev = i === 0 ? 0 : sequences[i - 1];
        const next = i === sequences.length - 1 ? 0 : sequences[i + 1];
        const zerosCount = sequences[i];

        if (zerosCount > 1) {
            maxLength = Math.max(maxLength, 1 + prev, 1 + next);
        } else if (zerosCount === 1) {
            maxLength = Math.max(maxLength, prev + 1 + next);
        } else if (zerosCount === 0) {
            maxLength = Math.max(maxLength, next);
        }
    }

    return maxLength;
}

const getAlternatingSequences = (num) => {
    let shiftedNum = num;
    const result = [];
    let serchingFor = 0;
    let counter = 0;

    for (let i = 0; i <= BYTES; ++i) {
        if ((shiftedNum & 1) !== serchingFor) {
            result.push(counter);
            serchingFor = shiftedNum & 1;
            counter = 0;
        }

        ++counter;
        shiftedNum >>>= 1;
    }

    result.push(counter);

    return result;
}

const optimalFlip = (num) => {
    let prevLength = 0;
    let currentLength = 0;
    let maxLength = 1;

    while (num !== 0) {
        if ((num & 1) === 1) { // current bit is 1
            ++currentLength;
        } else if ((num & 1) === 0) { // current bit is 0
            prevLength = (num & 2) === 0 ? 0 : currentLength;
            currentLength = 0;
        }

        maxLength = Math.max(prevLength + 1 + currentLength, maxLength);

        num >>>= 1;
    }

    return maxLength;
}

console.log(getLongestSequence(1775)); // space - O(b) 
console.log(optimalFlip(1775)); // space - O(1)