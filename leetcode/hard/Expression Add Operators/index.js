/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const res = [];
    
    dfs(num, target, res, 0, [], 0, 0);
    
    return res;
};

const dfs = (num, target, res, pos, expPath, expEval, prevValue) => {
    if (pos === num.length) {
        if (expEval === target) {
            res.push(expPath.join(''));
        }
        return;
    }
    
   for (let i = pos; i < num.length; i++) {
		if (num[pos] === '0' && i !== pos) break;
       
		let currValue = parseInt(num.substring(pos, i + 1));
		let len = expPath.length;
       
		if (pos === 0) {
            expPath.push(currValue);
			dfs(num, target, res, i + 1, expPath, currValue, currValue); 
			expPath.splice(len);
		} else {
            expPath.push('+', currValue);
			dfs(num, target, res, i + 1, expPath, expEval + currValue, currValue); 
			expPath.splice(len);
            
            expPath.push('-', currValue);
			dfs(num, target, res, i + 1, expPath, expEval - currValue, -currValue); 
			expPath.splice(len);
            
            expPath.push('*', currValue);
			dfs(num, target, res, i + 1, expPath, expEval - prevValue + prevValue * currValue, prevValue * currValue); 
			expPath.splice(len);
		}
	}
}