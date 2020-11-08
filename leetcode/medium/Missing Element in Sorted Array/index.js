const mainBrut = (arr, k) => {
    let counter = 0; // how many numbers missed

    for (let i = 1; i < arr.length; ++i) {
        counter += arr[i] - arr[i - 1] - 1;

        if (counter >= k) {
            return arr[i] + k - counter - 1;
        }
    }
}
// 4,5,6,7,8,9    5
// 0 1 2 3 4 5    5

// 4,7,9    5 - value diff
// 0 1 2    2 - index diff

const main = (arr, k) => {
    let left = 0;
    let right = arr.length - 1;
    let counter = 0;

    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        const valueDiff = arr[middle] - arr[0];

        counter = valueDiff - middle;

        if (counter >= k) {
            return arr[middle] + k - counter - 1;
        } else {
            left = middle + 1;
        }
    }

    if (counter < k) {
        return arr[arr.length - 1] + k - counter;
    }
}


console.log(main([4,7,9,10], 1)) // 5
console.log(main([4,7,9,10], 3)) // 8
console.log(main([2,4,6,8], 3)) // 7
console.log(main([2,4,6,15], 7)) // 11
console.log(main([1,2,4], 3)) // 6