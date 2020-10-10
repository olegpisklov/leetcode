var deleteNode = function(root, key) {
    if (!root) {
        return null;
    }
    
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
        return root;
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key);
        return root;
    }

    if (!root.right) {
        return root.left;
    }
    if (!root.left) {
        return root.right;
    }

    let mostLeft = root.right;
    
    while (mostLeft.left) {
        mostLeft = mostLeft.left
    }
    
    mostLeft.left = root.left;
    
    return root.right;
}