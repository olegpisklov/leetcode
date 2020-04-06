const find_permutations = function(nums) {
    let permutations = [[]];
        
    for (let i = 0; i < nums.length; ++i) {
        const len = permutations.length;
        const result = [];

        for (let k = 0; k < len; ++k) {
            const perm = permutations[k];

            if (!perm.length) {
                perm.push(nums[i]);
                result.push(perm);
            } else {
                for (let j = 0; j <= perm.length; ++j) {
                    const newPerm = [...perm];

                    newPerm.splice(j, 0, nums[i]);
                    result.push(newPerm);
                }
            }
        }

        permutations = result;
    }

    return permutations;
};

console.log('Here are all the permutations:');
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
    console.log(permutation);
});


//             ''
//             a
//     ba            ab
// cba bca bac   cab acb abc

const find_permutations_rec = (str) => {
    if (!str.length) return [''];

    const firstChar = str.charAt(0);
    const leftover = str.substring(1);

    const perms = find_permutations_rec(leftover);
    const newPerms = [];

    for (let i = 0; i < perms.length; ++ i) {
        const word = perms[i];

        if (!word.length) {
            newPerms.push(firstChar);
        } else {
            for (let k = 0; k <= word.length; ++k) {
                newPerms.push(word.substring(0, k) + firstChar + word.substring(k));
            }
        }
    }

    return newPerms;
}

console.log('Here are all the permutations 2:');
const result1 = find_permutations_rec('abc');
result1.forEach((permutation) => {
    console.log(permutation);
});
