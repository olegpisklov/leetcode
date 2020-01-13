const updateBit = (num, i, value) => {
    const mask = ~(1 << i);
    return (num & mask) | (value << i);
}

console.log(updateBit(9, 2, 1))