class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const main = (nums, n1, n2) => {
    const root = buildBST(nums);
    const lcaNode = findLCA(root, n1, n2);

    return findDistance(lcaNode, n1) + findDistance(lcaNode, n2);
}

const buildBST = (nums) => {
    // we can do shuffle here in order to avoid case when the arr is sorted
    let root = new TreeNode(nums[0]);
    
    for (let i = 1; i < nums.length; ++i) {
        insertToBST(root, nums[i]);
    }

    return root;
}

const insertToBST = (root, val) => {
    let cur = root;
    
    while (cur.val !== val) {
        if (cur.val > val) {
            // go left
            if (cur.left === null) {
                cur.left = new TreeNode(val);
            }
            cur = cur.left;
            
        } else {
            // go right
            if (cur.right === null) {
                cur.right = new TreeNode(val);
            }
            cur = cur.right;
        }
    }
    
    return root;
}

var lowestCommonAncestor = function(root, p, q) { // O(1) space
    let cur = root;
    
    while (cur !== null) {
        if (cur.val > p.val && cur.val > q.val) {
            cur = cur.left;
        } else if (cur.val < p.val && cur.val < q.val) {
            cur = cur.right;
        } else {
            return cur;
        }
    }
    
    return null;
}


const findLCA = (root, p, q) => { // O(n) space
    if (root.val > p.val && root.val > q.val) {
        return findLCA(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return findLCA(root.right, p, q);
    } else {
        return root;
    }
}

const findDistance = (node, val) => {
    if (!node) {
        return null;
    }
    if (node.val === val) {
        return 0;
    }
    return val > node.val ? findDistance(node.right, val) + 1 : findDistance(node.left, val) + 1;
}
// Time: O(n * h) - avg, O(n^2) - worst case when arr is sorted
// Space: O(n)

console.log(main([2, 1, 3], 1, 3)); // 2
console.log(main([8,6,10,4,7,9,11], 7, 9)); // 4