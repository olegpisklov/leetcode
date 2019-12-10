const fruits_into_baskets = function(fruits) {
    let maxCount = 0;
    let start = 0;
    const treeSet = new Set();
    
    for (let i = 0; i < fruits.length; ++i) {
      treeSet.add(fruits[i]);
      maxCount = i + 1 - start;
  
      if (treeSet.size > 2) {      
        treeSet.delete(fruits[start]);
        start++;
      }
    }
  
    return maxCount;
  };