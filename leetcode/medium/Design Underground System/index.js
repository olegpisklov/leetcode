
var UndergroundSystem = function() {
    this.avg = {};
    this.trips = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.trips[id] = {
        startStation: stationName,
        startTime: t
    };
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if (this.trips[id] === undefined) {
        return;
    }
    
    const {startStation, startTime} = this.trips[id];
    const key = startStation + '#' + stationName;

    if (this.avg[key] !== undefined) {
        this.avg[key].time += t - startTime;
        this.avg[key].counter += 1;
    } else {
        this.avg[key] = {
            time: t - startTime,
            counter: 1
        }
    }

    delete this.trips[id];
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const {time, counter} = this.avg[startStation + '#' + endStation];

    return time / counter;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */