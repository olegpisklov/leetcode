class Pair {
    constructor(c1, c2) {
        this.c1 = c1;
        this.c2 = c2;
        this.isUsed = false;
    }
}

const main = (arr, word) => {
    const pairs = arr.map(([c1, c2]) => new Pair(c1, c2));
    const charToPairsMap = {};

    pairs.forEach(pair => {
        if (charToPairsMap[pair.c1] === undefined) {
            charToPairsMap[pair.c1] = [];
        }
        if (charToPairsMap[pair.c2] === undefined) {
            charToPairsMap[pair.c2] = [];
        }

        charToPairsMap[pair.c1].push(pair);
        charToPairsMap[pair.c2].push(pair);
    });

    return helper(word, 0, charToPairsMap);
}

const helper = (word, ind, pairsMap) => {
    if (ind === word.length) {
        return true;
    }
    if (pairsMap[word[ind]] === undefined) {
        return false;
    }

    let match = false;

    for (let i = 0; i < pairsMap[word[ind]].length; ++i) {
        const pair = pairsMap[word[ind]][i];

        if (pair.isUsed) continue;

        pair.isUsed = true;

        match = match || helper(word, ind + 1, pairsMap);

        pair.isUsed = false;
    }

    return match;
}

console.log(main([['B','A'],['A','B'],['X','Y'],['A','B']], "BABY"));
 
console.log(main([['B','A'],['A','B'],['L','E'],['A','B']], "ABLE"));