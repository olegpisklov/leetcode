const getBiggestLetter = (str) => {
    const map = {};
    let result = '';

    const updateResult = (char) => {
        if (result === '' || result.charCodeAt(0) < char.charCodeAt(0)) {
            result = char;
        }
    }

    for (let i = 0; i < str.length; ++i) {
        const char = str[i];
        const code = str.charCodeAt(i);

        map[char] = true;

        if (isLowerCase(char)) {
            const upperLetter = String.fromCharCode(code - 32);

            if (map[upperLetter]) {
                updateResult(upperLetter);
            }
        } else {
            const lowerLetter = String.fromCharCode(code + 32);

            if (map[lowerLetter]) {
                updateResult(char);
            }
        }
    }

    return result === '' ? 'NO' : result;
}

const isLowerCase = (char) => {
    const code = char.charCodeAt(0);

    return code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0);
}

console.log(getBiggestLetter('aaacbAbCd'))
console.log(getBiggestLetter('aA'))
console.log(getBiggestLetter('abcdE'))
console.log(getBiggestLetter('a'))
