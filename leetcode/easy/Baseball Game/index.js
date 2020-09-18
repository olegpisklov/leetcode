/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let sum = 0;
    const points = [];
    
    for (let i = 0; i < ops.length; ++i) {
        const cur = ops[i];
        
        if (Number.isInteger(cur - 0)) {
            points.push(cur - 0);
        } else if (cur === '+' && points.length > 0) {
            const last = points[points.length - 1];
            const prevLast = points.length > 1 ? points[points.length - 2] : 0
            
            points.push(last + prevLast);
        } else if (cur === 'D' && points.length > 0) {
            points.push(points[points.length - 1] * 2);
        } else if (cur === 'C' && points.length > 0) {
            points.pop();
        }
    }
    
    for (let i = 0; i < points.length; ++i) {
        sum += points[i];
    }
    
    return sum;
};