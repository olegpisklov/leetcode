const List = require('../../linked lists/liked-list');

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}


const isBinarySearchTree = (root) => {
    const getMax = (node) => {
        if (!node) {
            return 0;
        }
        return Math.max(node.value, getMax(node.right), getMax(node.left));
    };

    const getMin = (node) => {
        if (!node) {
            return 9999999999999999999999;
        }
        return Math.min(node.value, getMin(node.right), getMin(node.left));
    };

    const maxLeft = getMax(root.left);
    const minRigth = getMin(root.right);
    
    return maxLeft <= root.value && minRigth > root.value;
};

const isBinarySearchTree2 = (root) => {
    const checkTree = (node, min, max) => {
        if (!node) {
            return true;
        }

        if (max !== null && node.value > max || min !== null && node.value <= min) {
            return false;
        }

        return checkTree(node.left, min, node.value) && checkTree(node.right, node.value, max);
    }

    return checkTree(root, null, null);
}

const node1 = new BinaryTreeNode(17);
const node2 = new BinaryTreeNode(13);
const node3 = new BinaryTreeNode(23);
const node4 = new BinaryTreeNode(10);
const node5 = new BinaryTreeNode(15);
const node6 = new BinaryTreeNode(20);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;

console.log(JSON.stringify(isBinarySearchTree2(node1)));