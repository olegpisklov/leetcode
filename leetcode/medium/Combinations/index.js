/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    
    helper(n, k, 1, res, []);
    
    return res;
};

const helper = (n, k, ind, res, cur) => {
    if (cur.length === k) {
        res.push([...cur]);
        return;
    }
    
    for (let j = ind; j <= n; ++j) {
        cur.push(j);
        
        helper(n, k, j + 1, res, cur);
        
        cur.pop();
    }
}