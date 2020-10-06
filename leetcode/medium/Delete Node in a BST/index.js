/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) {
        return root;
    }

    if (root.val === key) {
        return deleteRoot(root);
    }

    helper(root, key, null);
    
    return root;
};

const helper = (node, key, prev) => {
    if (!node) {
        return;
    }
    
    if (node.val === key) {
        return delNode(node, prev);
    } else if (node.val > key) {
        helper(node.left, key, node);
    } else {
        helper(node.right, key, node);
    }
}

const deleteRoot = (node) => {
    const left = node.left;
    const right = node.right;
    
    if (!right) {
        return left;
    }

    let mostLeft = right;

    while (mostLeft.left) {
        mostLeft = mostLeft.left;
    }

    mostLeft.left = left;

    return right;
}

const delNode = (node, prev) => {
    const left = node.left;
    const right = node.right;

    // it's a leaf
    if (!right && !left) {
        replace(prev, node, null);
        return;
    }

    if (!right) {
        replace(prev, node, left);
        return;
    }

    let mostLeft = right;

    while (mostLeft.left) {
        mostLeft = mostLeft.left;
    }

    mostLeft.left = left;

    replace(prev, node, right);
}

const replace = (prev, oldNode, newNode) => {
    if (prev.left === oldNode) {
        prev.left = newNode;
    } else {
        prev.right = newNode;
    }
}