const findKLargestNum = (arr, k) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const pivotIndex = partition(arr, left, right);

        if (pivotIndex === arr.length - k) {
            return arr[pivotIndex];
        } else if (pivotIndex < arr.length - k) {
            left = pivotIndex + 1; 
        } else {
            right = pivotIndex - 1;
        }
    }

};

// put all elements less then a pivot to the left, all bigger - to the right
const partition = (arr, low, hight) => {
    let lowIndex = low;
    let pivot = arr[hight];

    for (let i = low; i < hight; ++i) {
        if (arr[i] < pivot) {
            [arr[i], arr[lowIndex]] = [arr[lowIndex], arr[i]];
            lowIndex += 1;
        }
    }

    // put the pivot to it's corrent position
    [arr[lowIndex], arr[hight]] = [arr[hight], arr[lowIndex]];

    return lowIndex;
}


console.log(findKLargestNum([2, 7, 3, 4, 9, 12, 34, 5], 3)) // 9
