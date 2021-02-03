class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const main = (root) => {
    const res = [root.val];

    findLeftPath(root.left, res);
    findLeafs(root, res);
    findRightPath(root.right, res);

    return res;
}

const isLeaf = (node) => !node.left && !node.right;

const findLeftPath = (node, path) => {
    if (!node || isLeaf(node)) {
        return;
    }

    path.push(node.val);

    findLeftPath(node.left ? node.left : node.right, path);
}

const findRightPath = (node, path) => {
    if (!node || isLeaf(node)) {
        return;
    }

    findRightPath(node.right ? node.right : node.left, path);

    path.push(node.val);
}

const findLeafs = (node, path) => {
    if (!node) {
        return;
    }
    if (isLeaf(node)) {
        path.push(node.val);
    }

    findLeafs(node.left, path);
    findLeafs(node.right, path);
}


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.right = node2;
node2.left = node3;
node2.right = node4;

console.log(main(node1)); // [1,3,4,2]

const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node5.left = node7;
node5.right = node8;
node3.left = node6;
node6.left = node9;
node6.right = node10;

console.log(main(node1)); // [1,2,4,7,8,9,10,6,3]
