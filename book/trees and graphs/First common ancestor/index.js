const findCommonAncestor = (node1, node2, root) => {
    if (!root || root === node1 || root === node2) {
        return root;
    }

    const isNode1onLeft = isOnSubtree(node1, root.left);
    const isNode2onLeft = isOnSubtree(node2, root.left);

    if (isNode1onLeft !== isNode2onLeft) {
        return root.value;
    }

    const nextSide = isNode1onLeft ? 'left' : 'right';

    return findCommonAncestor(node1, node2, root[nextSide]);
};

const isOnSubtree = (node, root) => {
    if (!root) {
        return false;
    }

    if (node === root) {
        return true;
    }

    return isOnSubtree(node, root.left) || isOnSubtree(node, root.right);
};

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

const node1 = new BinaryTreeNode(17);
const node2 = new BinaryTreeNode(13);
const node3 = new BinaryTreeNode(23);
const node4 = new BinaryTreeNode(9);
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

console.log(findCommonAncestor(node9, node8, node1));