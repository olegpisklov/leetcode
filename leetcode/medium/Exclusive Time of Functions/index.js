/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
class Log {
    constructor(str) {
        const [id, action, time] = str.split(':');
        
        this.id = parseInt(id);
        this.action = action;
        this.time = parseInt(time);
    }
}

const ACTION = {
    start: 'start',
    end: 'end'
}
/**
 * Example:
 * 
 *    ------   -----
 * --------------------  ------
 */

var exclusiveTime = function(n, logs) {
    const logInst = new Array(logs.length);
    
    for (let i = 0; i < logs.length; ++i) {
        logInst[i] = new Log(logs[i]);
    }
    
    const result = new Array(n).fill(0);
    const stack = [];
        
    for (let i = 0; i < logInst.length; ++i) {
        const log = logInst[i];
        
        if (log.action === ACTION.start) {
            if (stack.length) {
                const peek = stack[stack.length - 1];
                result[peek.id] += log.time - peek.time;
            }
            
            stack.push(log);
        } else {
            const startLog = stack.pop();
            
            result[log.id] += log.time - startLog.time + 1;

            if (stack.length) {
                const peek = stack[stack.length - 1];
                // move starting time of the log on the stack to the end time of current log
                peek.time = log.time + 1; 
            } 
        }
    }
    
    return result;
};
