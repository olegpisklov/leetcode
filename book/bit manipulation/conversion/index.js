const bitSwapRequired = (a, b) => {
    let c = a ^ b;
    let count = 0;

    while (c !== 0) {
        if ((c & 1) === 1) {
            ++count;
        }

        c >>= 1;
    }

    return count;
}

console.log(bitSwapRequired(29, 15));