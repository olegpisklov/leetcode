const GraphNode = require('../graph-node');
const Queue = require('../../stacks & queues/queue');

const isThereRoute = (node1, node2) => {
    const queue = new Queue();

    queue.add(node1);

    while (!queue.isEmpty()) {
        const currentNode = queue.peek();
        queue.remove();

        // visit
        console.log(currentNode.value);

        if (currentNode.value === node2.value) {
            return true;
        }

        currentNode.adjacent.forEach(node => {
            if (node.marked) {
                return;
            }
            
            queue.add(node);
            node.marked = true;
        });

    }

    return false;
};

const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);
const node5 = new GraphNode(5);
// const node6 = new GraphNode(6);
// const node7 = new GraphNode(7);

node1.adjacent = [node2];
node2.adjacent = [node3];
node3.adjacent = [node1, node2];
node4.adjacent = [node5];


const graph = [node1, node2, node3, node4, node5];

console.log(isThereRoute(node1, node3));