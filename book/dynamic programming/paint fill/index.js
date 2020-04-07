const fillPaint = (screen, row, column, color) => {
    fillPaintRec(screen, row, column, screen[row][column], color);
}

const fillPaintRec = (screen, row, column, oldColor, newColor) => {
    if (row < 0 || row > screen[0].length - 1 || 
        column < 0 || column > screen.length - 1) {
        return;
    }

    if (screen[row][column] === oldColor) {
        screen[row][column] = newColor;
        fillPaintRec(screen, row + 1, column, oldColor, newColor);
        fillPaintRec(screen, row, column + 1, oldColor, newColor);
        fillPaintRec(screen, row - 1, column, oldColor, newColor);
        fillPaintRec(screen, row, column - 1, oldColor, newColor);
    }
}

const screen = [
    ['r', 'r', 'r', 'r'],
    ['r', 'g', 'r', 'r'],
    ['r', 'g', 'g', 'r'],
    ['r', 'r', 'r', 'r'],
];

fillPaint(screen, 1, 1, 'b');

screen.forEach((row) => console.log(row));