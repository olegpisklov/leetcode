/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.map = {}
    this.q = [];
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    while (this.q.length) {
        const first = this.q.shift();
        
        if (first.timestamp + 10 <= timestamp) {
            delete this.map[first.message];
        } else {
            break;
        }
    }
    
    if (this.map[message] === undefined || this.map[message] + 10 <= timestamp) {
        this.map[message] = timestamp;
        this.q.push({message, timestamp})
        return true;
    }
    
    return false;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */