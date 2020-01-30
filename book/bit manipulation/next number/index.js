/*
* Get next bigger number with the same count of 1s in binary
*/
const getNext = (n) => {
    let c = n;
    let c0 = 0;
    let c1 = 0;

    // count trailing zeros (most right)
    while(((c & 1) === 0) && c !== 0) {
        c0++;
        c >>= 1;
    }

    // count ones after trailing zeros
    while((c & 1) === 1) {
        c1++;
        c >>= 1;
    }

    // there is no bigger number, 11..11..000
    if (c0 + c1 === 32 || c0 + c1 === 0) {
        return -1;
    }

    // position of the right most non-trailing zero
    const p = c0 + c1;

    // flip right most non-trailing zero
    n |= (1 << p);
    // clear all bits to the right of p
    n &= ~((1 << p) - 1);
    // insert c1 - 1 ones to the most right
    n |= (1 << (c1 - 1)) - 1;

    return n;
}

console.log(getNext(220));

/*
* Get next smaller number with the same count of 1s in binary
*/
const getPrev = (n) => {
    let c = n;
    let c0 = 0;
    let c1 = 0;

    // count trailing ones (most right)
    while((c & 1) === 1) {
        c1++;
        c >>= 1;
    }

    // count zeros after trailing ones
    while(((c & 1) === 0) && c !== 0) {
        c0++;
        c >>= 1;
    }

    // position of the right most non-trailing one
    const p = c0 + c1;

    // sequence of ones
    const a = ~0;
    // sequence of onse followed by p + 1 zeros
    const b = a << (p + 1);

    // clear bit from 0 to p
    n &= b;

    // sequense of ones from 0 to c1 + 1
    const m = (1 << (c1 + 1)) - 1;

    // c1 + 1 ones followed by c0 - 1 zeros
    const l = m << (c0 - 1);
    
    n |= l;
    
    return n;
}

console.log(getPrev(220));

