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
        const q = directions[i] === DIRECTIONS.exit ? exitQueue : enterQueue;
        q.push(i);
    }

    const turnstile = new Turnstile(n);
    
    while (exitQueue.length !== 0 && enterQueue.length !== 0) {
        const exitIndex = exitQueue[0];
        const enterIndex = enterQueue[0];
        const exitTime = Math.max(turnstile.prevTime + 1, times[exitIndex]);
        const enterTime = Math.max(turnstile.prevTime + 1, times[enterIndex]);

        if (exitTime > enterTime) {
            turnstile.go(enterIndex, enterTime, DIRECTIONS.enter);
            enterQueue.shift();
        } else if (exitTime < enterTime) {
            turnstile.go(exitIndex, exitTime, DIRECTIONS.exit);
            exitQueue.shift();
        } else {
            if (turnstile.prevTime + 1 < exitTime || turnstile.prevDirection === null) { // previous second was not used
                turnstile.go(exitIndex, exitTime, DIRECTIONS.exit);
                exitQueue.shift();
            } else if (turnstile.prevDirection === DIRECTIONS.exit) {
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
        const time = Math.max(turnstile.prevTime + 1, times[index]);

        turnstile.go(index, time, DIRECTIONS.exit);
    }

    while (enterQueue.length !== 0) {
        const index = enterQueue.shift();
        const time = Math.max(turnstile.prevTime + 1, times[index]);

        turnstile.go(index, time, DIRECTIONS.enter);
    }

    return turnstile.records;
}

class Turnstile {
    constructor(capacity) {
        this.records = new Array(capacity); // it's possible to implement without capacity using hashmap
        this.prevDirection = null;
        this.prevTime = -1;
    }
    go(customerIndex, time, direction) {
        this.records[customerIndex] = time;
        this.prevTime = time;
        this.prevDirection = direction;
    }
}

console.log(main(5, [0,1,1,3,3], [0,1,0,0,1]));

// Time: O(n) Space: O(n)

console.log(main(4, [0, 0, 1, 6], [0, 1, 1, 0]));
console.log(main(4, [1, 1, 2, 6], [0, 1, 1, 0])); // [3,1,2,6]
console.log(main(5, [1,2,2,4,4], [0, 1, 0, 0, 1])); // [1, 3, 2, 5, 4]
