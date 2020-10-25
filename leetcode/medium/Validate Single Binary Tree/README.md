Given a list of TreeNodes. TreeNode is standard LC class:

```javascript
class TreeNode {
    TreeNode left;
    TreeNode right;
    int val;
}
```

Find out if all these nodes belong to the same valid binary tree.

```javascript
public boolean isBinaryTree(List<TreeNode> nodes) {
}
```

Example 1:

Let's say we have the following binary tree

		1
       ↙ ↘
      2   3
         ↙
        4

We can create it like this
TreeNode n1 = new TreeNode(1);
TreeNode n2 = new TreeNode(2);
TreeNode n3 = new TreeNode(3);
TreeNode n4 = new TreeNode(4);

n1.left = n2;
n1.right = n3;
n3.left = n4;

Input: [n4, n2, n3, n1]

Output: true
Example 2:

		 1
       ↙  ↘
      2    3
       ↘  ↙
        4

TreeNode n1 = new TreeNode(1);
TreeNode n2 = new TreeNode(2);
TreeNode n3 = new TreeNode(3);
TreeNode n4 = new TreeNode(4);

n1.left = n2;
n1.right = n3;
n2.right = n4;
n3.left = n4;

Input: [n2, n3, n4, n1]

Output: false
Example 3:

	 1
	⤤ ⤦
	 2 

TreeNode n1 = new TreeNode(1);
TreeNode n2 = new TreeNode(2);

n1.left = n2;
n2.left = n1;

Input: [n1, n2]

Output: false
Example 4:

		1           4
       ↙ ↘        ↙  ↘
      2   3      5     6

TreeNode n1 = new TreeNode(1);
TreeNode n2 = new TreeNode(2);
TreeNode n3 = new TreeNode(3);
TreeNode n4 = new TreeNode(4);
TreeNode n5 = new TreeNode(5);
TreeNode n6 = new TreeNode(6);

n1.left = n2;
n1.right = n3;

n4.left = n5;
n4.right = n6;

Input: [n2, n6, n4, n1, n3, n5]

Output: false
Example 5:

		1
       ↙ ↘
      2   3
         ↙
        4

TreeNode n1 = new TreeNode(1);
TreeNode n2 = new TreeNode(2);
TreeNode n3 = new TreeNode(3);
TreeNode n4 = new TreeNode(4);

n1.left = n2;
n1.right = n3;
n3.left = n4;

Input: [n2, n3, n1]

Output: false
Explanation: l4 is a part of the tree but it's missing in the input list so return false.

NOTE: Node values only used for demonstration purposes.