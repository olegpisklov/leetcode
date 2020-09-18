/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const oldColor = image[sr][sc];
    
    if (oldColor === newColor) {
        return image;
    }
    
    dfs(image, sr, sc, oldColor, newColor);
    
    return image;
};

const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];

const dfs = (image, row, col, oldColor, newColor) => {
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== oldColor) {
        return;
    }
    
    image[row][col] = newColor;
    
    for (let i = 0; i < dirs.length; ++i) {
        dfs(image, row + dirs[i][0], col + dirs[i][1], oldColor, newColor);
    }
}