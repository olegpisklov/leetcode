const compressStr = (str) => {
    const compressed = [];
    let count = 0;

    for (let i = 0; i < str.length; ++i) {
        ++count;

        if (str[i + 1] !== str[i]) {
            compressed.push(str[i] + count);
            count = 0;
        }
    }

    const result = compressed.join('');

    return str.length <= result.length ? str : result;
};

console.log(compressStr('aaaabbfffffffggh'));