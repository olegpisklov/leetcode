const DIRECTIONS = {
    enter: 0,
    exit: 1
};

const main = (n, times, directions) => {
    if (!n || !times || !times.length || !directions || !directions.length || 
        times.length !== n || directions.length !== n || times.length !== directions.length) {
        return [];
    }
    if (n === 1) {
        return times;
    }

    const exitQueue = [];
    const enterQueue = [];

    for (let i = 0; i < n; ++i) {
        if (directions[i] === 1) {
            exitQueue.push(i);
        } else {
            enterQueue.push(i);
        }
    }

    const turnstile = new Turnstile(n);
    
    while (exitQueue.length !== 0 && enterQueue.length !== 0) {
        const exitIndex = exitQueue[0];
        const enterIndex = enterQueue[0];
        const exitTime = Math.max(turnstile.currentTime, times[exitIndex]);
        const enterTime = Math.max(turnstile.currentTime, times[enterIndex]);

        if (exitTime > enterTime) {
            turnstile.go(enterIndex, enterTime, DIRECTIONS.enter);
            enterQueue.shift();
        } else if (exitTime < enterTime) {
            turnstile.go(exitIndex, exitTime, DIRECTIONS.exit);
            exitQueue.shift();
        } else {
            if (turnstile.currentTime + 1 < exitTime || turnstile.prevDirection === null) { // previous second was not used
                turnstile.go(exitIndex, exitTime, DIRECTIONS.exit);
                exitQueue.shift();
            } else if (turnstile.prevDirection === 1) {
                turnstile.go(exitIndex, exitTime, DIRECTIONS.exit);
                exitQueue.shift();
            } else {
                turnstile.go(enterIndex, enterTime, DIRECTIONS.enter);
                enterQueue.shift();
            }
        }
    }

    while (exitQueue.length !== 0) {
        const index = exitQueue.shift();
        const time = Math.max(turnstile.currentTime, times[index]);

        turnstile.go(index, time, DIRECTIONS.exit);
    }

    while (enterQueue.length !== 0) {
        const index = enterQueue.shift();
        const time = Math.max(turnstile.currentTime, times[index]);

        turnstile.go(index, time, DIRECTIONS.enter);
    }

    return turnstile.records;
}

class Turnstile {
    constructor(capacity) {
        this.records = new Array(capacity); // it's possible to implement without capacity using hashmap
        this.prevDirection = null;
        this.currentTime = 0;
    }
    go(customerIndex, time, direction) {
        this.records[customerIndex] = time;
        this.currentTime = time + 1;
        this.prevDirection = direction;
    }
}

console.log(main(5, [0,1,1,3,3], [0,1,0,0,1]));

// Time: O(n) Space: O(n)