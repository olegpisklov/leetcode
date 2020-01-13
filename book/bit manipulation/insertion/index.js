const instert = (n, m, i, j) => {
    const maskLeft = -1 << j + i;      // 1111000000;
    const maskRight = 1 << i - 1;      // 0000000011;
    const mask = maskLeft | maskRight; // 1111000011;

    const clearedN = n & mask;
    const shiftedM = m << i;    

    return clearedN | shiftedM;
}

console.log(instert(1024, 19, 2, 6))

// 1024 - 10000000000
// 19 - 10011
// result: 1100 - 10001001100