/*

Sample Input:
{
    "businessOfInterestId": 10,
    "positiveReviews": [
        {
            "userId": 1,
            "businessId": 10
        },
        {
            "userId": 2,
            "businessId": 10
        },
        {
            "userId": 1,
            "businessId": 11
        },
        {
            "userId": 2,
            "businessId": 11
        },
        {
            "userId": 1,
            "businessId": 12
        },
        {
            "userId": 2,
            "businessId": 12
        },
        {
            "userId": 3,
            "businessId": 12
        }
    ]
}

Sample Output:
    11

Business Similarity Score against business 10:
    11: 2 / (2 + 2 - 2) = 1.0
    12: 2 / (2 + 3 - 2) = 0.667

*/

const findMostSimilarBusiness = (businessOfInterestId, positiveReviews) => {
    const businessToUsersMap = positiveReviews.reduce((result, review) => {
        if (result[review.businessId] !== undefined) {
            result[review.businessId].add(review.userId);
        } else {
            result[review.businessId] = new Set([review.userId]);
        }
        
        return result;
    }, {});

    let maxSimilarity = 0;
    let maxSimilarityBusinessID = 0;

    for (let businessId in businessToUsersMap) {
        if (parseInt(businessId) === businessOfInterestId) {
            continue;
        }

        const intersection = [...businessToUsersMap[businessId]].filter(
            userId => businessToUsersMap[businessOfInterestId].has(userId)
        );

        const similarity = intersection.length / (businessToUsersMap[businessId].size + businessToUsersMap[businessOfInterestId].size - intersection.length);

        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            maxSimilarityBusinessID = businessId;
        }
    }

    return maxSimilarityBusinessID;
}

const reviews = [
    {
        "userId": 1,
        "businessId": 10
    },
    {
        "userId": 2,
        "businessId": 10
    },
    {
        "userId": 1,
        "businessId": 11
    },
    {
        "userId": 2,
        "businessId": 11
    },
    {
        "userId": 1,
        "businessId": 12
    },
    {
        "userId": 2,
        "businessId": 12
    },
    {
        "userId": 3,
        "businessId": 12
    }
];

console.log(findMostSimilarBusiness(10, reviews));