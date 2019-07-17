const GraphNode = require('../graph-node');

const buildTree = (arr, start, end) => {
    if (end < start) {
        return;
    }

    const middleIndex = Math.ceil((start + end) / 2);
    const node = new GraphNode(arr[middleIndex]);

    node.left = buildTree(arr, start, middleIndex - 1);
    node.right = buildTree(arr, middleIndex + 1, end);

    return node;
}

const getTree = (arr) => {
    return buildTree(arr, 0, arr.length - 1);
};


console.log(JSON.stringify(getTree([0,1,2,3,5,6,9,12,17,23,25,30])) )