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
