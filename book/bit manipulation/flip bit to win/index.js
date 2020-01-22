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

console.log(getLongestSequence(1775));