const isPermutationOfPalindrome = (str) => {
    const map = getCharFrequencyMap(str);

    let oddCount = 0;

    for (let i = 0; i < str.length; ++i) {
        if (map[str.charAt(i)] === -1) {
            continue;
        }

        if (map[str.charAt(i)] % 2 > 0) {
            ++oddCount;
        }

        if (oddCount > 1) {
            return false;
        }
    }

    return true;
};

const getCharFrequencyMap = (str) => {
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const map = {};

    for (let i = 0; i < str.length; ++i) {
        if (str.charCodeAt(i) < a || str.charCodeAt(i) > z) {
            map[str.charAt(i)] = -1;
        } else if (map[str.charAt(i)]) {
            ++map[str.charAt(i)];
        } else {
            map[str.charAt(i)] = 1;
        }
    }

    return map;
};

console.log(isPermutationOfPalindrome('taco cat'));