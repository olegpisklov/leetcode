const Heap = require('../../../data structures/Heap');

class Leaderboard {
    constructor() {
        this.playersMap = {};
        this.heap = new Heap((a, b) => a > b);
    }

    /**
     * Update the leaderboard by adding score to the given player’s score. 
     * If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
     * @param {*} playerId 
     * @param {*} score 
     */
    addScore(playerId, score) {
        this.playersMap[playerId] = score;
    }

    /**
     * Return the score sum of the top K players.
     * @param {*} K 
     */
    top(K) {
        for (let playerId in this.playersMap) {
            this.heap.insert(this.playersMap[playerId]);

            if (this.heap.getLength() > K) {
                this.heap.delTop();
            }
        }

        let sum = 0;

        while(this.heap.getLength() !== 0) {
            sum += this.heap.delTop();
        }

        return sum;
    }

    /**
     * Reset the score of the player with the given id to 0. It is guaranteed that the player was added to the leaderboard 
     * @param {*} playerId 
     */
    reset(playerId) {
        delete this.playersMap[playerId];
    } 
}

const leaderboard = new Leaderboard();
leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
console.log(leaderboard.top(1));           // returns 73;
leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
console.log(leaderboard.top(3));           // returns 141 = 51 + 51 + 39;

