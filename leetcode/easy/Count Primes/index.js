/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primesMap = new Array(n);
    
    primesMap.fill(true);
    
    for (let i = 2; i * i <= n; ++i) {
        if (!primesMap[i]) continue;

        for (let j = i * i; j < n; j += i) {
            primesMap[j] = false;
        }
    }
    
    let counter = 0;
    
    for (let i = 2; i < n; ++i) {
        if (primesMap[i]) ++counter;
    }
    
    return counter;
};

const isPrime = (n) => {
    if (n <= 1) return false;

    for (let i = 2; i * i <= n; ++i) {
        if (n % i === 0) return false; 
    }
    
    return true;
}