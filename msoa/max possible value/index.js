const main = (num, digit) => {
    if (num === 0) {
        return digit * 10;
    }

    const n = Math.abs(num);
    const sign = n / num;

    let cur = n;
    let counter = 0;
    let maxValue = Number.MIN_SAFE_INTEGER;
    let position = 1;

    while (cur > 0) {
        ++counter;
        cur = Math.floor(cur / 10);
    }

    for (let i = 0; i <= counter; ++i) {
        const newValue = Math.floor(n / position) * (position * 10) + digit * position + n % position;

        if (newValue * sign > maxValue) {
            maxValue = newValue * sign;
        }

        position = position * 10;
    } 

    return maxValue;
}

console.log(main(98765, 5));
console.log(main(7234, 5));
console.log(main(1234, 5));
console.log(main(-621, 5));