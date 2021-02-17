class Heap {
    constructor(comparator) {
        this.values = [];
        this.comparator = comparator;
    }

    add(val) {
        this.values.push(val);
        this.values.sort(this.comparator);
    }

    removeTop() {
        return this.values.shift();
    }
}


const fiveStarReviews = (productRatings, threshold) => { // N, T
    const n = productRatings.length;
    let percentageSum = productRatings.reduce((prev, cur) => prev + getRatingPercentage(cur[0], cur[1]), 0);
    let avgPercentage = percentageSum / n;

    let reviews = 0;
    const productRatingsHeap = new Heap((a, b) => {
        const ratingDiff1 = getRatingPercentage(a[0] + 1, a[1] + 1) - getRatingPercentage(a[0], a[1]);
        const ratingDiff2 = getRatingPercentage(b[0] + 1, b[1] + 1) - getRatingPercentage(b[0], b[1]);

        return ratingDiff2 - ratingDiff1;
    });

    for (let i = 0; i < n; ++i) {
        productRatingsHeap.add(productRatings[i]);
    }
    while (avgPercentage < threshold) {
        console.log('avgPercentage', avgPercentage)

        const productRating = productRatingsHeap.removeTop();

        percentageSum -= getRatingPercentage(productRating[0], productRating[1]);

        productRating[0] += 1;
        productRating[1] += 1;

        percentageSum += getRatingPercentage(productRating[0], productRating[1]);
        avgPercentage = percentageSum / n;

        productRatingsHeap.add(productRating);

        ++reviews
    }

    return reviews;
}

const getRatingPercentage = (fiveStarsCount, totalReviewCount) => 
    fiveStarsCount / totalReviewCount * 100;

console.log(fiveStarReviews([[4,4], [1,2], [3, 6]], 77));
console.log(fiveStarReviews([[0,100]], 99));
console.log(fiveStarReviews([[0,100], [0,100]], 99));
console.log(fiveStarReviews([[0,100], [0,100], [0,100], [0,100], [0,100], [0,100]], 99));

// Time: O(T * log(N)) where T - threshold, N - productRatings length
// Space: O(N)