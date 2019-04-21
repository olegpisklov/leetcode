const Stack = require('../stack');

const sortStack = (stack) => {
    const minStack = new Stack();
    
    while (!stack.isEmpty()) {
        const element = stack.pop();

        while (!minStack.isEmpty() && element.data < minStack.peek()) {
            stack.push(minStack.pop().data);
        }       

        minStack.push(element.data);
    }

    while (!minStack.isEmpty()) {
        stack.push(minStack.pop().data);
    }

    return stack;
}

const myStack = new Stack();

myStack.push(4);
myStack.push(7);
myStack.push(2);
myStack.push(5);
myStack.push(6);

sortStack(myStack);