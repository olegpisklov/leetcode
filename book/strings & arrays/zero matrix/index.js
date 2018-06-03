const zeroMatrix = (matrix) => {
    const zeroRows = [];
    const zeroColumns = [];

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            if (matrix[i][j] === 0) {
              zeroRows.push(i);
              zeroColumns.push(j);
            }
        }
    }

    for (let i = 0; i < zeroRows.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            matrix[zeroRows[i]][j] = 0;
        }
    }

    for (let i = 0; i < zeroColumns.length; ++i) {
        for (let j = 0; j < matrix.length; ++j) {
            matrix[j][zeroColumns[i]] = 0;
        }
    }

    return matrix;
};

console.log(zeroMatrix([
    [1,2,3],
    [3,0,2],
    [2,3,4]
]));