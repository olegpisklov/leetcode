const setBit = (num, i) => {
    return num | (1 << i);
}

console.log(setBit(8, 2))