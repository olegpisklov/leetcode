const toBinary = require('./numToBinary');

const getBit = (num, i) => {
    return (num & (1 << i)) !== 0;
}

console.log(getBit(toBinary(5), 2));