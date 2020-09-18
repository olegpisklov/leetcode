/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function(sea, topRight, bottomLeft) {
    if (!sea.hasShips(topRight, bottomLeft)) {
        return 0;
    }
    
    if (isEqual(topRight, bottomLeft)) {
        return 1;
    }

    const xMid = Math.floor((topRight[0] + bottomLeft[0]) / 2);
    const yMid = Math.floor((topRight[1] + bottomLeft[1]) / 2);
    
    return countShips(sea, topRight, [xMid + 1, yMid + 1]) +
        countShips(sea, [xMid, yMid], bottomLeft) +
        countShips(sea, [topRight[0], yMid], [xMid + 1, bottomLeft[1]]) + 
        countShips(sea, [xMid, topRight[1]], [bottomLeft[0], yMid + 1]);
};

const isEqual = (point1, point2) => {
    return point1[0] === point2[0] && point1[1] === point2[1];
}