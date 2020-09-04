const main = (s, k) => {
    const result = [];
    const map = {};
    const exists = new Set();
    let j = 0;

    for (let i = 0; i < s.length; ++i) {
        const char = s[i];

        if (map[char] !== undefined) {
            j = Math.max(map[char] + 1, j);
        }

        if (i - j + 1 === k) {
            const str = s.substring(j, i + 1);

            if (!exists.has(str)) {
                result.push(str);
                exists.add(str);
            }
            ++j;
        }

        map[char] = i;
    }

    return result;
}
// Time: O(n * k) Space: O(n)

 console.log(main("qwertyuiopasdfghjklzxcvbnm", 20));