const main = (str1, str2) => {
    if (str1 === str2) return true;
    if (str1.length !== str2.length) return false;

    const str1map = {};
    const str2set = {};

    for (let i = 0; i < str1.length; ++i) {
        const char1 = str1[i];
        const char2 = str2[i];

        str2set[char2] = true; // for handling edge case with 26 different chars in a strings

        if (str1map[char1] !== undefined && str1map[char1] !== char2) {
            return false;
        }

        str1map[char1] = char2;
    }

    if (Object.keys(str1map).length === 26 && Object.keys(str2set).length === 26) {
        return false;
    }

    return true;
}

console.log(main("aabcc","ccdee"));
console.log(main("leetcode", "codeleet"));