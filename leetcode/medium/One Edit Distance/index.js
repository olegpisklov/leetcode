const main = (s1, s2) => {
    let j = 0; 
    let changed = false;

    for (let i = 0; i < Math.max(s1.length, s2.length); ++i) {
        if (s1[i] === s2[j]) {
            ++j;
        } else if (!changed) {
            changed = true;

            if (s1.length > s2.length) {
                continue;
            } else if (s1.length < s2.length) {
                --i;
                ++j;
            } else {
                ++j;
            }
        } else {
            return false;
        }

    }

    return true;
}

console.log(main("cat", "dog"));
console.log(main("cat", "cats"));
console.log(main("cat", "cut"));
console.log(main("cat", "cast"));
console.log(main("cat", "at"));
console.log(main("cat", "act"));

