/*


            1
        /       \
       2         4 
    /  |  \      |
    5   6   7    8
       / \
      9   10


1,2,5,),6,9,),10,),),7,),),4,8,),),)

*/
class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

const serialize = (root) => {
    const res = [];

    buildArr(root, res);

    return res.join(',');
}

const buildArr = (node, res) => {
    if (!node) {
        res.push(')');
        return;
    }

    res.push(node.val);

    node.children.forEach(child => 
        buildArr(child, res)
    )

    res.push(')');
}

const deserialize = (str) => {
    const arr = str.split(',');

    return buildTree(arr);
}

const buildTree = (arr) => {
    const val = arr.shift();

    if (val === ')') {
        return;
    }

    const node = new Node(val);
    let child = buildTree(arr);

    while (child) {
        node.children.push(child);
        child = buildTree(arr);
    }

    return node;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);

node1.children = [node2, node4];
node2.children = [node5, node6, node7];
node6.children = [node9, node10];
node4.children = [node8];

const str = serialize(node1);
console.log(str);

const tree = deserialize(str);
console.log(JSON.stringify(tree, null, 2));
