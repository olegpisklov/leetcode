const getNumberOfOptions = (priceOfJeans, priceOfShoes, priceOfSkirts, priceOfTops, dollars) => {
    const memo = new Array(4).fill(0).map(i => ({}));

    return helper([priceOfJeans, priceOfShoes, priceOfSkirts, priceOfTops], 0, dollars, memo);
}

const helper = (staff, ind, money, memo) => {
    if (ind === staff.length && money >= 0) {
        return 1;
    }
    if (money < 0 || ind === staff.length) {
        return 0;
    }
    if (memo[ind][money] !== undefined) {
        return memo[ind][money];
    }

    let res = 0;

    for (let i = 0; i < staff[ind].length; ++i) {
        const price = staff[ind][i];

        res += helper(staff, ind + 1, money - price, memo);
    }

    memo[ind][money] = res;

    return res;
}

console.log(getNumberOfOptions([2, 3], [4], [2, 3], [1, 2], 10));

// Time: worst case is when we have a lot of money, so the result will be any possible combination of cloths:
// O(a*b*c*d) where a, b, c and d are the sizes of the four price arrays
// Space: O(M) where M is the money