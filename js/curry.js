const sum = (a, b) => {
    return a + b;
}

const curry = function(func) {
    return function curried(...args) {
        if (func.length === args.length) {
            return func.apply(this, args);
        } else {
            return curried.bind(this, ...args)
        }
    }
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2));

/**
const curriedSum = (a) => {
    return (b) => {
        return a + b;
    }
}
 */