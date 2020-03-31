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
    // We take the most right element as a pivot.
    // In cases when we have a sorted array or an array with all duplicates values,
    // we get a worst case time complexity - O(n^2).
    // In order to mitigate this risk we could use a randome pivot:
    //
    // const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    // [nums[pivotIndex], nums[high]] = [nums[high], nums[pivotIndex]];
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

// Time: avarage case - O(N), worst case - O(N^2)
// Space: O(1)

console.log(findKLargestNum([2, 7, 3, 4, 9, 12, 34, 5], 3)) // 9
