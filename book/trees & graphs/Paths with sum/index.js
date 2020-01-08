const getPathsWithSumCount = (root, sum) => {
    let count = 0;

    const traverse = (currentNode, diff) => {
        if (diff === 0) {
            ++count;
        }

        if (!currentNode || !currentNode.left || !currentNode.right) return;

        traverse(currentNode.left, diff - currentNode.left.value);
        traverse(currentNode.right, diff - currentNode.right.value);
    };

    const findCount = (node) => {
        if (!node){
            return;
        }

        traverse(node, sum - node.value);

        findCount(node.left);
        findCount(node.right);
    }

    findCount(root);

    return count;
};

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

const node1 = new BinaryTreeNode(17);
const node2 = new BinaryTreeNode(9);
const node3 = new BinaryTreeNode(23);
const node4 = new BinaryTreeNode(8);
const node5 = new BinaryTreeNode(15);
const node6 = new BinaryTreeNode(3);
const node7 = new BinaryTreeNode(10);
const node8 = new BinaryTreeNode(14);
const node9 = new BinaryTreeNode(16);
const node10 = new BinaryTreeNode(27);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;
node5.left = node8;
node5.right = node9;
node3.right = node10;

//                17
//           9        23
//        8     15          27
//     3   10  14  16

// console.log(getPathsWithSumCount(node1, 40));


const getPathsWithTargetSumCount = (root, targetSum) => {    
    const countMap = {};

    const traverse = (node, runningSum, targetSum) => {
        if (!node) {
            return 0;
        }

        let total = 0;
        const currentSum = runningSum + node.value;

        if (currentSum === targetSum) {
            ++total;
        }

        if (countMap[currentSum - targetSum]) {
            ++total;
        }

        if (countMap[currentSum]) {
            countMap[currentSum] += 1;
        } else {
            countMap[currentSum] = 1;
        }

        total += traverse(node.left, currentSum, targetSum);        
        total += traverse(node.right, currentSum, targetSum);

        countMap[currentSum] -= 1;

        return total;
    }

    return traverse(root, 0, targetSum);
};

console.log(getPathsWithTargetSumCount(node1, 40));

