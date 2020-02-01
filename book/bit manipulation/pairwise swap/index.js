const pairwiseSwap = (n) => {
    const shiftedOddBits = (0x55555555 & n) << 1;
    const shiftedEvenBits = (0xaaaaaaaa & n) >>> 1;

    return shiftedEvenBits | shiftedOddBits;
}