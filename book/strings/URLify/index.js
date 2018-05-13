const URLify = function (str, len) {
    let s = '';
    let i = 0;

    while (i < len) {
        if (str[i] === ' ') {
            s += '%20';
        } else {
            s += str[i];
        }
        ++i;
    }

    return s;
};

console.log(URLify('Mr John Smith    ', 13));