class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    const result = [];
    let queue = [root];
  
    while (queue.length) {
      const values = [];
      const children = []
  
      for (let i = 0; i < queue.length; ++i) {
        const node = queue[i];
  
        values.push(node.value);
  
        if (node.left) {
          children.push(node.left);
        }
        if (node.right) {
          children.push(node.right);
        }
      }
  
      result.push(values);
      queue = children;
    }
  
    return result;
  };
  
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Level order traversal: ${traverse(root)}`);
  