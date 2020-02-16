class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_sum_of_path_numbers = function(root) {
    return getPathsSums(root, 0);
  };
  
  
  const getPathsSums = function(root, currentSum) {
    if (!root) {
      return 0;
    }
    const sum = currentSum * 10 + root.value;
    if (!root.left && !root.right) {
      return sum;
    }
  
    return getPathsSums(root.left, sum) + getPathsSums(root.right, sum);
  };
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
  