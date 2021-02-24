class Heap {
    constructor(comparator) {
        this.values = [];
        this.comparator = comparator;
    }

    add(value) {
        this.values.push(value);;
        this.values.sort(this.comparator);
    }

    removeTop() {
        return this.values.shift();
    }

    size() {
        return this.values.length;
    }
}

const getTopGames = (num, topKGames, games, numReviews, reviews) => {
    if (numReviews === 0 || reviews.length === 0 || num === 0 || games.length === 0) {
        return [];
    }

    const gameStatsMap = games.reduce((acc, game) => { // time G, space: G
        acc[game.toLowerCase()] = {
            orginalName: game,
            mentionsCount: 0,
            reviewsCount: 0
        };

        return acc;
    }, {});

    for (let i = 0; i < numReviews; ++i) { // time R * W, space W
        const reviewWords = reviews[i].toLowerCase().replace(/[^a-z]/g, ' ').split(' ');
        let reviewCount = 1;

        for (let j = 0; j < reviewWords.length; ++j) {
            const word = reviewWords[j];

            if (gameStatsMap[word] !== undefined) {
                gameStatsMap[word].mentionsCount += 1;
                gameStatsMap[word].reviewsCount += reviewCount;
                reviewCount = 0;
            }
        }
    }

    const gameStatsArr = [];

    for (let game in gameStatsMap) {
        const {orginalName, mentionsCount, reviewsCount} = gameStatsMap[game];

        if (mentionsCount > 0) {
            gameStatsArr.push([orginalName, mentionsCount, reviewsCount]);
        }
    }

    const minHeap = new Heap(heapComparator); // space K

    for (let i = 0; i < gameStatsArr.length; ++i) { // time G*log(K)
        minHeap.add(gameStatsArr[i]);

        if (minHeap.size() > topKGames) {
            minHeap.removeTop();
        }
    }

    const result = [];

    while (minHeap.size() !== 0) {
        result.push(minHeap.removeTop());
    }

    result.sort(resultComparator); // K * log(K)

    return result.map(stats => stats[0]);
}

// Space: O(G + W) - where G - number of games, W - max number of words in a review
// Time: O(R*W + G*log(K)) - where R - number of reviews, K - top games number

const heapComparator = (a, b) => {
    if (a[1] > b[1]) return 1;

    if (a[1] < b[1]) return -1;

    return a[2] - b[2];
};

const resultComparator = (a, b) => {
    if (a[1] < b[1]) return 1;

    if (a[1] > b[1]) return -1;

    return b[2] - a[2];
}

const games = ['osmo', 'uno', 'playmonster', 'lcr', 'buzzed', 'pieface'];
const reviews = [
    'The new osmo is super fun for my kids',
    "Osmo is the hottest of the season. Osmo will be on every kid's wishlist!",
    'Expect the Playmonster dron to be very popular this year, PlayMonster',
    'Uno is our family tradition',
    "Playmonster and Osmo are the games to go with for family's holiday grouping, Playmonster is good",
    'For parents of older kids, look into buing them an LCR',
    'PieFace is becoming popular among children.'
];

console.log(getTopGames(6, 2, games, 7, reviews));