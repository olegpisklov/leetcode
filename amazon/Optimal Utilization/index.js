const getPairs = (a, b, target) => {
    a.sort((i, j) => i[1] - j[1]);
    b.sort((i, j) => i[1] - j[1]);

    let result = [];
    let max = Number.MIN_SAFE_INTEGER;
    let m = a.length;
    let n = b.length;
    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        let sum = a[i][1] + b[j][1];

        if (sum > target) {
            --j;
        } else {
            if (sum >= max) {
                if (sum > max) {
                    max = sum;
                    result = [];
                }

                result.push([a[i][0], b[j][0]]);

                let index = j - 1;

                while (index >= 0 && b[index][1] === b[index + 1][1]) {
                    result.push([a[i][0], b[index][0]]);
                    --index;
                }
            }

            ++i;
        }
    }

    return result;
} 


// Time: O(A + B)
console.log(getPairs([[1, 2], [2, 4], [3, 6]], [[1, 2]], 7))
console.log(getPairs([[1, 3], [2, 5], [3, 7], [4, 10]], [[1, 2], [2, 3], [3, 4], [4, 5]], 10))
console.log(getPairs([[1, 8], [2, 7], [3, 14]], [[1, 5], [2, 10], [3, 14]], 20))
console.log(getPairs([[1, 8], [2, 15], [3, 9]], [[1, 8], [2, 11], [3, 12]], 20))