const main = (groups, cart) => {
    if (!groups || !groups.length) {
        return 1;
    }

    if (!cart || !cart.length) {
        return 0;
    }

    let groupIndex = 0;
    let productIntex = 0;
    let totalMatch = 0;

    for (let i = 0; i < cart.length; ++i) {
        if (cart[i] === groups[groupIndex][productIntex] || groups[groupIndex][productIntex] === 'anything') {
            ++productIntex;

            if (productIntex === groups[groupIndex].length) {
                ++totalMatch;
                ++groupIndex;
                productIntex = 0;

                if (groupIndex >= groups.length) break;
            }
        } else {
            i -= productIntex; // revert i back when the matching was started
            productIntex = 0;
        }
    }

    return totalMatch === groups.length ? 1 : 0;
}

// Time: O(N * M), where N - number of items in the cart, M - max length of a group
// Space: O(1)

const test = (groups, cart, expected) => {
    const res = main(groups, cart);

    return res === expected;
}

console.log(test([['apple', 'apple'], ['banana', 'anything', 'banana']], ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'], 1))
console.log(test([['apple', 'apple'], ['banana', 'anything', 'banana']], ['banana', 'orange', 'banana', 'apple', 'apple'], 0))
console.log(test([['apple', 'apple'], ['banana', 'anything', 'banana']], ['apple', 'banana', 'apple', 'banana', 'orange', 'banana'], 0))
console.log(test([['apple', 'apple'], ['apple', 'apple', 'banana']], ['apple', 'apple', 'apple', 'banana'], 0))
console.log(test(
    [ 
        [ "anything", "anything", "anything", "apple" ], 
        [ "banana", "anything", "banana" ],
    ], 
    ["orange", "apple", "banana", "orange", "apple", "orange", "orange", "banana", "apple", "banana"],
    1
))
console.log(test([["apple", "orange"], ["orange", "banana", "orange"]] ,["apple", "orange", "banana", "orange", "orange", "banana", "orange", "grape"], 1))
console.log(test([[ "anything", "apple" ], [ "banana", "anything", "banana" ]] ,["orange", "grapes", "apple", "orange", "orange", "banana", "apple", "banana", "banana"], 1))
console.log(test([[ "apple", "apple" ], [ "banana", "anything", "banana" ]] ,["apple", "apple", "orange", "orange", "banana", "apple", "banana", "banana"], 1))