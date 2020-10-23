/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sumArr = new Array(w.length);
    this.currentSum = 0;
    
    for (let i = 0; i < w.length; ++i) {
        this.currentSum += w[i];
        this.sumArr[i] = this.currentSum;
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const randValue = Math.floor(Math.random() * this.currentSum + 1);
    let left = 0;
    let right = this.sumArr.length - 1;

    while(left <= right) {
        const middle = Math.floor((right + left) / 2);
        
        if (this.sumArr[middle] === randValue) {
            return middle;
        } else if (this.sumArr[middle] < randValue) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */