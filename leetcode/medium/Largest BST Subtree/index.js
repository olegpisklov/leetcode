const main = (root) => {
    const res = helper(root);
    return res.size;
}

const helper = (node) => {
    if (!node) {
        return {isBst: true, size: 0, min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER};
    }
    if (!node.left && !node.right) {
        return {isBst: true, size: 1, min: node.val, max: node.val};
    }

    const leftInfo = helper(node.left);
    const rightInfo = helper(node.right);

    const isBst = leftInfo.isBst && rightInfo.isBst && node.val > leftInfo.max && node.val < rightInfo.min;

    const res = {};

    if (isBst) {
        res.isBst = true;
        res.min = Math.min(node.val, Math.min(leftInfo.min, rightInfo.min));
        res.max = Math.max(node.val, Math.max(leftInfo.max, rightInfo.max));
        res.size = leftInfo.size + rightInfo.size + 1;
    } else {
        res.isBst = false;
        res.min = 0;
        res.max = 0;
        res.size = Math.max(leftInfo.size, rightInfo.size);
    }

    return res;
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const node = new TreeNode(10);
const node1 = new TreeNode(5);
const node2 = new TreeNode(15);
const node3 = new TreeNode(1);
const node4 = new TreeNode(8);
const node5 = new TreeNode(7);

node.left = node1;
node.right = node2;
node1.left = node3;
node1.right = node4;
node2.right = node5;

console.log(main(node));

const tree = new TreeNode(25);
const tree1 = new TreeNode(18);
const tree2 = new TreeNode(50);
const tree3 = new TreeNode(19);
const tree4 = new TreeNode(20);
const tree5 = new TreeNode(35);
const tree6 = new TreeNode(60);
const tree7 = new TreeNode(15);
const tree8 = new TreeNode(18);
const tree9 = new TreeNode(20);
const tree10 = new TreeNode(40);
const tree11 = new TreeNode(55);
const tree12 = new TreeNode(70);
const tree13 = new TreeNode(25);

tree.left = tree1;
tree.right = tree2;
tree1.left = tree3;
tree1.right = tree4;
tree2.left = tree5;
tree2.right = tree6;
tree3.right = tree7;
tree4.left = tree8;
tree4.right = tree13;
tree5.left = tree9;
tree5.right = tree10;
tree6.left = tree11;
tree6.right = tree12;
tree9.right = tree13;

console.log(main(tree));
