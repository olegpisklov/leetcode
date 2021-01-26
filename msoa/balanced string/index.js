const main = (str) => {
    const lower = new Array(26).fill(0);
    const upper = new Array(26).fill(0);

    let res = '';

    for (let i = 0; i < str.length; ++i) {
        for (let j = i; j < str.length; ++j) {
            const char = str[j];
            const code = str.charCodeAt(j);

            if (isLowerCase(char)) {
                lower[code - 'a'.charCodeAt(0)] += 1;
            } else {
                upper[code - 'A'.charCodeAt(0)] += 1;
            }

            if (isBalanced(lower, upper) && (res.length > j - i + 1 || res === '')) {
                res = str.substring(i, j + 1);
            }
        }

        clear(lower, upper);
    }

    return res;
}

const isBalanced = (lower, upper) => {
    for (let i = 0; i < 26; ++i) {
        if (lower[i] > 0 && upper[i] === 0 || lower[i] === 0 && upper[i] > 0) {
            return false;
        }
    }

    return true;
}

const clear = (lower, upper) => {
    for (let i = 0; i < 26; ++i) {
        lower[i] = 0;
        upper[i] = 0;
    }
}

const isLowerCase = (char) => {
    const code = char.charCodeAt(0);

    return code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0);
}

console.log(main('azABaabza'));
console.log(main('TacoCat'));
console.log(main('AcZCbaBz'));