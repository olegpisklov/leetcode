const main = (s, k) => {
    const charIndexMap = {};
    const result = new Set();
    let j = 0;

    for (let i = 0; i < s.length; ++i) {
        const char = s[i];

        if (charIndexMap[char] !== undefined) {
            j = Math.max(charIndexMap[char] + 1, j);
        }

        if (i - j + 1 === k) {
            const str = s.substring(j, i + 1);
            result.add(str);
            ++j;
        }

        charIndexMap[char] = i;
    }

    return Array.from(result);
}
// Time: O(n * k), k for substring Space: O(1) or length of the alphabet if we don't count the result, else O(n)

 console.log(main("qwertyuiopasdfghjklzxcvbnm", 20));
 console.log(main("xabxcd", 4));
 console.log(main("aabcdbcd", 3));
