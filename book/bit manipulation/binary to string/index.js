const printBinary = (num) => {
    if (num >= 1 || num <= 0) {
        return 'ERROR';
    }

    let binary = '.';

    while (num > 0) {
        if (binary.length >= 32) {
            return 'ERROR';
        }

        const res = num * 2;

        if (res >= 1) {
            binary += '1';
            num = res - 1;
        } else {
            binary += '0';
            num = res;
        }
    }

    return binary;
}

console.log(printBinary(0.75))