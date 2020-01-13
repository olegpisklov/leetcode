const clearBit = (num, i) => {
    const mask = ~(1 << i); // 111011111;
    return num & mask;
};

console.log(clearBit(7, 2));

const clearBitsFromMostLeftToI = (num, i) => {
    const mask = (1 << i) - 1; // 01111
    return num & mask;
}

console.log(clearBitsFromMostLeftToI(15, 2));

const clearBitsFromItoRight = (num, i) => {
    const mask = -1 << (i + 1); // 1111111111110000
    return num & mask;
}

console.log(clearBitsFromItoRight(15, 1));