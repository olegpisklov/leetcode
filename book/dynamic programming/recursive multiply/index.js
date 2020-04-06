const multiplyMy = (a, b) => {
    if (a === 0 || b === 0) {
        return 0;
    }

    if (b === 1) {
        return a;
    }

    return a + multiplyMy(a, b - 1);
}

// Time: O(B)
console.log(multiplyMy(3, 8));

const multiplyBook = (a, b) => {
    const smaller = a < b ? a : b;
    const bigger = a < b ? b : a;

    return multiplyHelper(smaller, bigger);
}

const multiplyHelper = (smaller, bigger) => {
    if (smaller === 0) {
        return 0;
    }

    if (smaller === 1) {
        return bigger;
    }

    const s = smaller >> 1; // devide by 2
    const halfResult = multiplyHelper(s, bigger);

    if (smaller % 2 === 0) { // even number
        return halfResult + halfResult;
    } else {
        return halfResult + halfResult + bigger;
    }
}


// Time: O(logS)
console.log(multiplyBook(3, 8));
