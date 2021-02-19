/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    let maxHorizintalDiff = 1;
    let maxVerticalDiff = 1;
    
    horizontalCuts.push(h);
    horizontalCuts.push(0);
    verticalCuts.push(w);
    verticalCuts.push(0);
    
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    
    for (let i = 0; i < horizontalCuts.length - 1; ++i) {        
        maxHorizintalDiff = Math.max(maxHorizintalDiff, horizontalCuts[i + 1] - horizontalCuts[i]);
    }
    
    for (let i = 0; i < verticalCuts.length - 1; ++i) {
        maxVerticalDiff = Math.max(maxVerticalDiff, verticalCuts[i + 1] - verticalCuts[i]);
    }
    
    return (maxHorizintalDiff * maxVerticalDiff) % (10**9 + 7);
};