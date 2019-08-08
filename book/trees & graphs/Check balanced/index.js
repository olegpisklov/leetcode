const List = require('../../linked lists/liked-list');

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}


const getHeights = (node, level, heights) => {
    if (!node) {
        heights.push(level);
        return;
    }

    getHeights(node.left, level + 1, heights);
    getHeights(node.rigth, level + 1, heights);

    return heights;
};

const checkHeightsApproximateEqual = (heights) => {
    return heights.every(height => {
        if (height > heights[0]) {
            return height === heights[0] + 1;
        }

        if (height < heights[0]) {
            return height + 1 === heights[0];
        }

        return height === heights[0];
    });
}

const isBalanced = (root) => {
    const heights = getHeights(root, 0, []);

    return checkHeightsApproximateEqual(heights);
};

const node1 = new BinaryTreeNode(11);
const node2 = new BinaryTreeNode(12);
const node3 = new BinaryTreeNode(13);
const node4 = new BinaryTreeNode(14);
const node5 = new BinaryTreeNode(15);
const node6 = new BinaryTreeNode(16);

node1.left = node2;
node1.rigth = node3;
node2.left = node4;
node3.left = node5;
node3.rigth = node6;

console.log(JSON.stringify(isBalanced(node1)));