/**
 * @param {number} num
 * @return {string}
 */
const dictionary = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    100: 'Hundred',
    1000: 'Tousand',
    1000000: 'Million',
    1000000000: 'Billion'
};

var numberToWords = function(num) {
    if (num === 0) {
        return 'Zero';
    }
    
    const billions = Math.floor(num / 1000000000);
    const millions = Math.floor((num - billions * 1000000000) / 1000000);
    const thousands = Math.floor((num - billions * 1000000000 - millions * 1000000) / 1000);
    const rest = num - billions * 1000000000 - millions * 1000000 - thousands * 1000;
    
    let result = '';
    
    if (billions) {
        result += three(billions) + ' ' + 'Billion';
    }
    
    if (millions) {
        if (billions) {
            result += ' ';
        }
        result += three(millions) + ' ' + 'Million';
    }
    
    if (thousands) {
        if (millions) {
            result += ' ';
        }
        result += three(thousands) + ' ' + 'Thousand';
    }
    
    
    if (rest) {
        if (thousands || millions || billions) {
            result += ' ';
        }
        
        result += three(rest);
    }
    
    return result;
};

const one = (n) => {
    return dictionary[n];
}

const two = (n) => {
    if (n <= 20) {
        return dictionary[n];    
    }
    
    const int = Math.floor(n / 10) * 10;
    const rest = n % 10;
    
    if (rest !== 0) {
        return dictionary[int] + ' ' + dictionary[rest];    
    } else {
        return dictionary[int];
    }
}

const three = (n) => {
    const hundreds = Math.floor(n / 100);
    
    if (hundreds > 0) {
        if (n % 100) {
            return one(hundreds) + ' ' + one(100) + ' ' + two(n % 100);    
        }
        
        return one(hundreds) + ' ' + one(100);
    }
    
    return two(n % 100);
}

