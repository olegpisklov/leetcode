const rotateMatrix = (matrix) => {
    const len = matrix[0].length;

    for (let i = 0; i < len / 2; ++i) {
        const last = len - 1 - i;
;
        for (let j = i; j < last; ++j) {
            const top = matrix[i][j];
            const offset = j - i;

            matrix[i][j] = matrix[last - offset][i];
            matrix[last - offset][i] = matrix[last][last - offset];
            matrix[last ][last - offset] = matrix[j][last];
            matrix[j][last] = top;
        }
    }

    return matrix;
};

console.log(rotateMatrix([[1,2,3], [4,5,6], [7,8,9]]));