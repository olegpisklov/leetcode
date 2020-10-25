const main = (nodes) => {
    const indegrees = {};

    for (let i = 0; i < nodes.length; ++i) {
        const left = nodes[i].left;
        const right = nodes[i].right;

        if (left) {
            if (indegrees[left.val] !== undefined) {
                return false;
            }
            indegrees[left.val] = 1;
        }

        if (right) {
            if (indegrees[right.val] !== undefined) {
                return false;
            }
            indegrees[right.val] = 1;
        }
    }

    let root = null;

    for (let i = 0; i < nodes.length; ++i) {
        const current = nodes[i];

        if (indegrees[current.val] === undefined) {
            if (!root) {
                root = current;
            } else {
                return false;
            }
        }
    }

    const visited = new Set();

    if (dfs(root, visited)) {
        for (let i = 0; i < nodes.length; ++i) {
            if (!visited.has(nodes[i])) {
                return false;
            }
        }
    }

    return true;
}

const dfs = (node, visited) => {
    if (!node) {
        return true;
    }
    if (visited.has(node)) {
        return false;
    }
    visited.add(node);

    return dfs(node.left, visited) && dfs(node.right, visited);
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
// node2.right = node;

/**
 *          10
 *          / \
 *         5   15
 *       /   \   \
 *      1     8   7
*/

console.log(main([node, node1, node2, node3, node4, node5]));