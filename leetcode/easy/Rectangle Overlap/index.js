/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const isRight = rec1[2] <= rec2[0];
    const isLeft = rec1[0] >= rec2[2];
    const isUp = rec1[3] <= rec2[1];
    const isDown = rec1[1] >= rec2[3];
    
    return !(isRight || isLeft || isUp || isDown);
};