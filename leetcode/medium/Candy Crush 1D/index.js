// recursive approach
const main = (str) => {
    let stable = true;
    let start = 0;
    let end = 0;
   
    for (let i = 0; i < str.length; ++i) {
        if (stable && str[i] === str[i + 1] && str[i] === str[i + 2]) {
            stable = false;
            start = i;
        } else if (!stable && str[i] !== str[i + 1]) {
            end = i + 1;
            break;
        }
    }

    if (stable) {
        return str;
    }

    return main(str.substr(0, start) + str.substr(end, str.length - 1));
}

// Time: O(N^2), N for the loop, N for substr, N/3 - recursion
// Space: O(N)

// console.log(main('aaabbbc'));
// console.log(main('aabbbacd'));
// console.log(main('aabbccddeeedcba'));
// console.log(main('aaabbbacd'));


// stack approach
const main2 = (str) => {
    const stack = [];

    for (let i = 0; i < str.length; ++i) {
        const peek = stack.length && stack[stack.length - 1];

        if (peek && peek.char === str[i]) {
            peek.counter += 1
        } else {
            let peek = stack.length && stack[stack.length - 1];

            if (peek && peek.counter >= 3) {
                stack.pop();
            }

            peek = stack.length && stack[stack.length - 1];

            if (peek && peek.char === str[i]) {
                peek.counter += 1
            } else {
                stack.push({
                    char: str[i],
                    counter: 1
                });
            }
        }
    }

    if (stack[stack.length - 1].counter >= 3) {
        stack.pop();
    }

    let res = [];

    while (stack.length) {
        const last = stack.pop();

        for (let j = 0; j < last.counter; ++j) {
            res.push(last.char);
        }
    }

    return res.reverse().join('');
}


console.log(main2('aaaabbbac')); // => 'c'
console.log(main2('aabbbacd')); // => 'cd'
console.log(main2('aabbccddeeedcba')); // => ''
console.log(main2('aaabbbacd')); // => 'acd' 
console.log(main2('dddabbbbaccccaax')); // => 'x'