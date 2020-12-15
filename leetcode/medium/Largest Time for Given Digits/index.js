/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    const res = {
        maxTime: -1
    }
    
    permutate(A, 0, res);
    
    if (res.maxTime === -1) {
        return '';
    } else {
        return Math.floor(res.maxTime / 60).toLocaleString('en-IN', { minimumIntegerDigits: 2 }) + ':' + (res.maxTime % 60).toLocaleString('en-IN', { minimumIntegerDigits: 2 });
    }
};

const permutate = (arr, start, res) => {
    if (start === arr.length) {
        if (isValidTime(arr)) {
            setMaxTime(arr, res);
            return;
        }
    }
    
    for (let i = start; i < arr.length; ++i) {
        swap(arr, start, i);
        permutate(arr, start + 1, res);
        swap(arr, start, i);
    }
}

const isValidTime = (arr) => {
    const hours = arr[0] * 10 + arr[1];
    const minutes = arr[2] * 10 + arr[3];
    
    return hours < 24 && minutes < 60;
}

const setMaxTime = (arr, res) => {
    const hours = arr[0] * 10 + arr[1];
    const minutes = arr[2] * 10 + arr[3];
    
    res.maxTime = Math.max(res.maxTime, hours * 60 + minutes);
}

const swap = (arr, i1, i2) => {
    if (i1 === i2) return;
    
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}




