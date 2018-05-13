const oneAway = (str1, str2) => {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    if (str1.length === str2.length) {
        let replaced = false;

        for (let i = 0; i < str1.length; ++i) {
            if (str1[i] !== str2[i]) {
                if (replaced) {
                    return false;
                }
                replaced = true;
            }
        }

        return true;
    }

    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length < str2.length ? str1 : str2;
    let index1 = 0;
    let index2 = 0;
    let inserted = false;

    while (index1 < longer.length && index2 < shorter.length) {
        if (longer[index1] !== shorter[index2]) {
            if (inserted) {
                return false;
            }

            inserted = true;
            ++index1;
        } else {
            ++index1;
            ++index2;
        }
    }

    return true;
};

console.log(oneAway('pale', 'ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bae'));