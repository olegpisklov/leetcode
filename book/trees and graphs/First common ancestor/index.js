const findCommonAncestor = (node1, node2, root) => {
    const isNode1onLeft = isOnSubtree(node1, root.left);
    const isNode2onLeft = isOnSubtree(node2, root.right);

    if (isNode1onLeft && !isNode2onLeft) {
        return root;
    }

    const nextSide = isNode1onLeft ? 'left' : 'right';

    return findCommonAncestor(node1, node2, root[nextSide]);
}

const isOnSubtree = (node, root) => {
    if (!root) {
        return false;
    }

    if (node === root) {
        return true;
    }

    return isOnSubtree(node, root.left) || isOnSubtree(node, root.right);
}