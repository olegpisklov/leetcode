const findMagicIndex = (arr) => {
    if (!arr || !arr.length) {
        return null;
    }

    // return findMagic(arr, 0, arr.length - 1);
    return findMagicFollowUp(arr, 0, arr.length - 1);
}

// without duplicates
// binary search pattern
const findMagic = (arr, left, right) => {
    if (right < left) {
        return -1;
    }

    const middleIndex = Math.floor((left + right) / 2);
    const value = arr[middleIndex];

    if (value === middleIndex) {
        return middleIndex;
    }

    if (value > middleIndex) {
        return findMagic(arr, left, middleIndex - 1);
    }

    if (value < middleIndex) {
        return findMagic(arr, middleIndex + 1, right);
    }

}

// console.log(findMagicIndex([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]));

// with duplicate values
const findMagicFollowUp = (arr, left, right) => {
    if (right < left) {
        return -1;
    }

    const middleIndex = Math.floor((left + right) / 2);
    const value = arr[middleIndex];

    if (value === middleIndex) {
        return middleIndex;
    }

    const leftIndex = Math.min(middleIndex - 1, value);
    const leftResult = findMagicFollowUp(arr, left, leftIndex);
    
    if (leftResult >= 0) {
        return leftResult;
    }

    const rightIndex = Math.max(middleIndex + 1, value);

    return findMagicFollowUp(arr, rightIndex, right);
}


console.log(findMagicIndex([-10, -5, 2, 2, 2, 3, 4, 5, 9, 12, 13]));