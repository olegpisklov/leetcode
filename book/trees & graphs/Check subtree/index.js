class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

/**
 * Pre-order tree traversal
 * @param {BinaryTreeNode} root 
 */
const traverse = (root) => {
    // return X for null node for the case with duplicated values
    if (!root) return 'X';

    let result = '';
    
    result += ' ' + root.value;
    result += traverse(root.left);
    result += traverse(root.right);   

    return result;
}

const node50 = new BinaryTreeNode(50);
const node40 = new BinaryTreeNode(40);
const node30 = new BinaryTreeNode(30);
const node45 = new BinaryTreeNode(45);
const node20 = new BinaryTreeNode(20);
const node35 = new BinaryTreeNode(35);
const node42 = new BinaryTreeNode(42);
const node47 = new BinaryTreeNode(47);
const node70 = new BinaryTreeNode(70);
const node60 = new BinaryTreeNode(60);
const node80 = new BinaryTreeNode(80);
const node55 = new BinaryTreeNode(55);
const node65 = new BinaryTreeNode(65);
const node75 = new BinaryTreeNode(75);
const node85 = new BinaryTreeNode(85);

node50.left = node40;
node50.right = node70;
node40.left = node30;
node40.right = node45;
node30.left = node20;
node30.right = node35;
node45.left = node42;
node45.right = node47;
node70.left = node60;
node70.right = node80;
node60.left = node55;
node60.right = node65;
node80.left = node75;
node80.right = node85;

const checkIfSubtree = (node1, node2) => {
    const srt1 = traverse(node1);
    const srt2 = traverse(node2);

    return srt1.indexOf(srt2) !== -1;
}

console.log(checkIfSubtree(node50, node70));
