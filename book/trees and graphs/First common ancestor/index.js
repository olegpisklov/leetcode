const findCommonAncestor = (node1, node2, root) => {
    if (node1.value < root.value && node2.value > root.value ||
        node1.value > root.value && node2.value < root.value) {
        return root;
    }

    if (node1.value < root.value && node2.value < root.value) {
        return findCommonAncestor(node1, node2, root.left);
    }

    if (node1.value > root.value && node2.value > root.value) {
        return findCommonAncestor(node1, node2, root.right);
    }
}