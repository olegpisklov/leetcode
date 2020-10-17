const main = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let resultColIndex = -1;

    for (let row = 0, col = cols - 1; row < rows && col >= 0;) {
        if (matrix[row][col] === 0) {
            ++row;
        } else {
            resultColIndex = col;
            --col;
        }
    }

    return resultColIndex;

}

console.log(main([
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 1]
]));