const List = require('../../linked lists/liked-list');

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

const buildListOfDepths = (root) => {
    const arr = [];

    const buildList = (node, i) => {
        if (!node) {
            return;
        }

        let list;

        if (arr[i]) {
            list = arr[i];            
        } else {
            list = new List();
            arr.push(list);
        }

        list.addToTail(node.value);

        buildList(node.left, i + 1);
        buildList(node.rigth, i + 1);
    }

    buildList(root, 0);

    return arr;
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

console.log( JSON.stringify(buildListOfDepths(node1)));