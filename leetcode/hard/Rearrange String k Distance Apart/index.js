// const Heap = require('../../../data structures/Heap.js');

class Heap {
    constructor(compar) {
        this.values = [];
        this.compar = compar;
    }

    insert(val) {
        this.values.push(val);
        this.values.sort(this.compar);
    }

    delTop() {
        return this.values.shift();
    }

    getLength() {
        return this.values.length;
    }
}

const main = (str, k) => {
    const freqMap = {};

    for (let i = 0; i < str.length; ++i) {
        const char = str[i];

        if (freqMap[char] === undefined) {
            freqMap[char] = 1;
        } else {
            freqMap[char] += 1;
        }
    }

    const maxHeap = new Heap((a, b) => b[1] - a[1]);

    for (let char in freqMap) {
        maxHeap.insert([char, freqMap[char]]);
    }

    let res = '';

    while (maxHeap.getLength()) {
        let list = [];

        for (let i = 0; i < k; ++i) {
            let [char, freq] = maxHeap.delTop();          

            if (maxHeap.getLength() === 0 && i + 1 < k) {
                return '';
            }

            res += char;

            if (--freq > 0) {
                list.push([char, freq]);
            }
        }

        list.forEach(pair => maxHeap.insert(pair));
    }

    return res;
}

console.log(main('aaadbbcc', 2));
console.log(main('aaabc', 3));
console.log(main('aabbcc', 3));
