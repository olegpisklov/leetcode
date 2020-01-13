const getBit = (num, i) => {
    return (num & (1 << i)) !== 0;
}

console.log(getBit(5, 0));